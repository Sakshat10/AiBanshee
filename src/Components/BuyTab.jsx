import toast from "react-hot-toast";
import { parseEther } from "viem";
import BANSHAI_NEW_ABI from "../utils/BANSHAI_NEW_ABI.json";
import usdt_ABI from "../utils/usdt_ABI.json";
import { config } from "../utils/config";
import { readContract, writeContract } from "@wagmi/core";
import { useCallback, useEffect, useState } from "react";
import { waitForTransactionReceipt } from "@wagmi/core";
import { useAccount } from "wagmi";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { referralRoute } from "../utils/RecoilState/ReferralRoute";
import bigInt from "big-integer";
export default function BuyTab() {
  const [quantity, setQuantity] = useState("");
  const [referral, setReferral] = useRecoilState(referralRoute);
  const [token, setToken] = useState("usdt");
  const [saleRound, setSaleRound] = useState(2);
  const [soldPercent, setSoldPercent] = useState(null);
  const [salesPercent, setSalesPercent] = useState();
  const [pendingState, setPendingState] = useState(false);

  const { address: walletAddress } = useAccount();
  const [salesData, setSalesData] = useState([
    { hour: 1, value: 1 },
    { hour: 2, value: 2 },
    { hour: 3, value: 3 },
    { hour: 4, value: 4 },
    { hour: 5, value: 5 },
    { hour: 6, value: 6 },
    { hour: 7, value: 7 },
    { hour: 8, value: 8 },
    { hour: 9, value: 9 },
    { hour: 10, value: 10 },
    { hour: 11, value: 11 },
    { hour: 12, value: 12 },
    { hour: 13, value: 13 },
    { hour: 14, value: 14 },
    { hour: 15, value: 15 },
    { hour: 16, value: 16 },
    { hour: 17, value: 17 },
    { hour: 18, value: 18 },
    { hour: 19, value: 19 },
    { hour: 20, value: 20 },
    { hour: 21, value: 21 },
    { hour: 22, value: 22 },
    { hour: 23, value: 23 },
    { hour: 24, value: 24 },
  ]);

  let options = {
    timeZone: "Asia/Kolkata",
    hour12: false, // If you want 24-hour format
    hour: "2-digit",
  };

  let hours = new Date().toLocaleString("en-IN", options);
  hours = Number(hours);

  if (hours < 11) {
    hours += 14;
  } else {
    hours = hours - 10;
  }
  useEffect(() => {
    for (let i = 0; i < 24; i++) {
      if (hours === salesData[i].hour) {
        setSalesPercent(salesData[i].value);
        break;
      }
    }
  }, [hours, salesData]);

  async function buyBNB(quantity, referral) {
    try {
      setQuantity("");
      setReferral("");
      setPendingState(true);
      if (typeof quantity != "number" && typeof referral != "string") {
        toast.error("Please enter a valid coupon code");
        setPendingState(false);
        return;
      }

      if (quantity <= 0) {
        toast.error("Quantity must be more than 0");
        setPendingState(false);
        return;
      }

      const result = await writeContract(config, {
        abi: BANSHAI_NEW_ABI,
        address: import.meta.env.VITE_TOKEN_SAME_ADDRESS_NEW,
        functionName: "buyWithBNB",
        args: [referral === "" || !referral ? "buybanshee" : referral],
        value: parseEther(quantity),
      });
      const resultTx = waitForTransactionReceipt(config, {
        hash: result,
        confirmations: 2,
      });
      await toast.promise(resultTx, {
        error: "Something went wrong",
        loading: "Processing the transaction...",
        success: () => {
          setPendingState(false);
          return "Successfully bought the tokens!!";
        },
      });
      return;
    } catch (error) {
      if (error.cause?.code === 4001) {
        toast.error("AAH!! You rejected the transaction.");
        setPendingState(false);

        return;
      }
      if (error.details.includes("insufficient funds")) {
        toast.error("AAH!! You don't have enough funds");
        setPendingState(false);
        return;
      }
      toast.error("OOPS!! There was some problem. Please try again");
      setPendingState(false);
      return;
    }
  }

  async function buyUSDT(quantity, referral) {
    try {
      setQuantity("");
      setReferral("");
      setPendingState(true);
      if (typeof quantity != "number" && typeof referral != "string") {
        toast.error("Please enter a valid coupon code");
        setPendingState(false);
        return;
      }

      if (quantity <= 1) {
        toast.error("Quantity must be more than 1");
        setPendingState(false);
        return;
      }

      const approve = await writeContract(config, {
        abi: usdt_ABI,
        address: import.meta.env.VITE_USDT_TOKEN_ADDRESS,
        functionName: "approve",
        args: [
          import.meta.env.VITE_TOKEN_SAME_ADDRESS_NEW,
          parseEther(quantity.toString()),
        ],
      });

      const approveTx = waitForTransactionReceipt(config, {
        hash: approve,
        confirmations: 2,
      });

      await toast.promise(approveTx, {
        loading: "Approving the transaction",
        error: "OPPS!! Something went wrong",
        success: "Transaction aprroved",
      });

      const result = await writeContract(config, {
        abi: BANSHAI_NEW_ABI,
        address: import.meta.env.VITE_TOKEN_SAME_ADDRESS_NEW,
        functionName: "buyWithUSD",
        args: [
          referral === "" || !referral ? "buybanshee" : referral,
          parseEther(quantity.toString()),
        ],
      });
      const resultTx = waitForTransactionReceipt(config, {
        hash: result,
        confirmations: 2,
      });

      await toast.promise(resultTx, {
        error: "Something went wrong",
        loading: "Processing the transaction...",
        success: "Successfully bought the tokens!!",
      });

      setPendingState(false);
      return;
    } catch (error) {
      setPendingState(false);

      if (error.cause?.code === 4001) {
        toast.error("AAH!! You rejected the transaction.");
        return;
      }
      if (error.details.includes("insufficient funds")) {
        toast.error("AAH!! You don't have enough funds");
        return;
      }
      toast.error("OOPS!! There was some problem. Please try again");
      return;
    }
  }

  // Function to calculate sales percentage based on current time

  const location = useLocation();

  const getReferralCode = useCallback(() => {
    const params = new URLSearchParams(location.search);
    return params.get("referral");
  }, [location.search]);

  useEffect(() => {
    const _referral = getReferralCode();
    if (_referral) {
      setReferral(_referral);

      // setIsReferred(true);
    }
  }, [getReferralCode, setReferral]);

  useQuery({
    queryKey: ["saleRound"],
    queryFn: getRoundData,
  });

  async function getRoundData() {
    const wagmiContractConfig = {
      address: import.meta.env.VITE_TOKEN_SAME_ADDRESS_NEW,
      abi: BANSHAI_NEW_ABI,
    };
    const _saleRound = await readContract(config, {
      ...wagmiContractConfig,
      functionName: "saleRound",
    });
    setSaleRound(_saleRound);
    const _soldPercentResult = await readContract(config, {
      ...wagmiContractConfig,
      functionName: "gettokenSoldInRounds",
      args: [_saleRound],
    });

    const _soldPercentResultBigInt = bigInt(_soldPercentResult);

    const _soldPercent =
      _saleRound === 1
        ? _soldPercentResultBigInt
            .multiply(100)
            .divide(25000000000000000000000000)
        : _saleRound === 2
        ? _soldPercentResultBigInt
            .multiply(100)
            .divide(35000000000000000000000000)
        : _soldPercentResultBigInt
            .multiply(100)
            .divide(40000000000000000000000000);

    const formattedSoldPercent = _soldPercent.toString(); // Convert to string
    setSoldPercent(formattedSoldPercent);

    return { saleRound: _saleRound, soldPercent: _soldPercent };
  }
  return (
    <div className="flex flex-col w-full h-full gap-5 pb-4 md:w-auto">
      <div className="">
        <h1 className="font-semibold text-[1.2rem]">Round {saleRound}</h1>
        {/* <p>
          Sales Percentage:{" "}
          {Number(soldPercent) + 45 >= 100
            ? 100
            : Number((Number(soldPercent) + 45).toFixed(2))}
        </p> */}
        <p>
          Sales Percentage:{" "}
          {/* {((Number(soldPercent) - 40) * 0.14 + 91.6).toFixed(2) >= 100
            ? 100
            : ((Number(soldPercent) - 40) * 0.14 + 91.6).toFixed(2)} */}
          {48}%
        </p>
      </div>

      <form action="#" className="flex flex-col justify-between h-full gap-5 ">
        <div className="flex">
          <input
            disabled={pendingState}
            type="number"
            className="disabled:cursor-not-allowed bg-transparent border-2  w-[100%]  rounded-l-md border-r-0  border-[#b21111] outline-0 px-4 py-2 focus:border-[#b21111]"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            placeholder={
              pendingState ? "Processing the transaction" : "Enter amount"
            }
          />

          <select
            name="token"
            id="token"
            value={token}
            onChange={(e) => {
              setToken(e.target.value);
            }}
            className="  bg-transparent border-2  rounded-r-md  border-[#b21111] outline-0 px-1 md:px-2 py-2 focus:border-[#b21111]"
          >
            <option
              value="usdt"
              className="text-black bg-transparent appearance-none"
            >
              USDT
            </option>
            <option
              value="bnb"
              className="text-black bg-transparent appearance-none"
            >
              BNB
            </option>
          </select>
        </div>

        {/* {!isreferred && (
          <div className=" group">
            <input
              disabled={pendingState}
              type="text"
              className="disabled:cursor-not-allowed bg-transparent md:w-auto w-[75%] border-2  rounded-l-md  border-[#b21111] outline-0 px-4 py-2 focus:border-[#b21111]"
              value={referral}
              onChange={(e) => {
                setReferral(e.target.value);
              }}
              placeholder={
                pendingState ? "Processing the transaction" : "Referral"
              }
            />
          </div>
        )} */}

        <button
          disabled={pendingState}
          type="submit"
          href="/buttons/43"
          className="rounded-md hover:!rounded-md btn41-43 btn-43 overflow-hidden disabled:cursor-not-allowed !w-[100%]"
          onClick={(e) => {
            e.preventDefault();
            if (walletAddress) {
              token === "usdt"
                ? buyUSDT(quantity, referral)
                : buyBNB(quantity, referral);
              return;
            }
            toast.error("Please connect your wallet first");
          }}
        >
          Buy Now
        </button>
      </form>
    </div>
  );
}
