import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatEther } from "viem";
import BANSHAI_NEW_ABI from "../utils/BANSHAI_NEW_ABI.json";
import BANSHAI_OLD_ABI from "../utils/BANSHAI_OLD_ABI.json";
import { config } from "../utils/config.js";
import { writeContract } from "@wagmi/core";
import { useAccount } from "wagmi";
import { readContracts } from "@wagmi/core";
import { useQuery } from "@tanstack/react-query";
import { waitForTransactionReceipt } from "@wagmi/core";
import { MdContentCopy } from "react-icons/md";

export default function CouponTab() {
  const [inputCouponCode, setInputCouponCode] = useState("");
  const [pendingState, setPendingState] = useState(false);
  const [couponCodeURL, setCouponCodeURL] = useState("");
  const [referralEarningBNB_NEW, setReferralEarningBNB_NEW] = useState(0);
  const [referralEarningUSDT_NEW, setReferralEarningUSDT_NEW] = useState(0);
  const [referralEarningBNB_OLD, setReferralEarningBNB_OLD] = useState(0);
  const [referralEarningUSDT_OLD, setReferralEarningUSDT_OLD] = useState(0);
  const [hasSetCoupon, setHasSetCoupon] = useState(false);

  const wagmiContractConfigNew = {
    address: import.meta.env.VITE_TOKEN_SAME_ADDRESS_NEW,
    abi: BANSHAI_NEW_ABI,
  };
  const wagmiContractConfigOld = {
    address: import.meta.env.VITE_TOKEN_SAME_ADDRESS_OLD,
    abi: BANSHAI_OLD_ABI,
  };

  const domain = window.location.origin;

  async function setCoupon(code) {
    try {
      setInputCouponCode("");
      setPendingState(true);
      if (typeof code != "string") {
        toast.error("Please enter a valid coupon code");
        setPendingState(false);
        return;
      }

      if (code === "") {
        toast.error("The coupon code can't be empty");
        setPendingState(false);
        return;
      }

      const setCouponCode = await writeContract(config, {
        abi: BANSHAI_NEW_ABI,
        address: import.meta.env.VITE_TOKEN_SAME_ADDRESS_NEW,
        functionName: "setCouponCode",
        args: [code],
      });

      const setCouponCodeTx = waitForTransactionReceipt(config, {
        hash: setCouponCode,
        confirmations: 2,
      });

      await toast.promise(setCouponCodeTx, {
        error: "OPPS!! Something went wrong",
        loading: "Setting the coupon code...",
        success: "Successfully added the coupon!",
      });

      setPendingState(false);
      window.location.reload();
    } catch (error) {
      if (error.cause.code === 4001) {
        toast.error("AAH!! You rejected the transaction.");
        setPendingState(false);
        return;
      }
      if (error.message.includes("CouponCodeAlreadyThere")) {
        toast.error("AAH!! The coupon already exists. Try another one");
        setPendingState(false);
        return;
      }
      if (error.message.includes("you_are_not_allowed")) {
        toast.error("You must have atleast 20,000 tokens");
        setPendingState(false);
        return;
      }
      console.log(error);
      toast.error("OOPS!! There was some problem. Please try again");
      setPendingState(false);
      return;
    }
  }

  const { address: walletAddress } = useAccount();

  const { isPending, data, isSuccess } = useQuery({
    queryKey: ["UserData"],
    queryFn: getCouponData,
  });

  const setFetchedData = useCallback(() => {
    const [
      _hasSetCoupon,
      _couponCode,
      _referralEarningBNB_NEW,
      _referralEarningUSDT_NEW,
      _referralEarningBNB_OLD,
      _referralEarningUSDT_OLD,
    ] = data;

    setHasSetCoupon(_hasSetCoupon.result);
    if (_couponCode.result !== "" && _couponCode.result) {
      setCouponCodeURL(`${domain}?referral=${_couponCode.result}`);
    }
    setReferralEarningBNB_NEW(_referralEarningBNB_NEW.result);
    setReferralEarningUSDT_NEW(_referralEarningUSDT_NEW.result);
    setReferralEarningBNB_OLD(_referralEarningBNB_OLD.result);
    setReferralEarningUSDT_OLD(_referralEarningUSDT_OLD.result);
  }, [domain, data]);

  async function getCouponData() {
    const result = await readContracts(config, {
      contracts: [
        {
          ...wagmiContractConfigNew,
          functionName: "hasSetCoupon",
          args: [walletAddress],
        },
        {
          ...wagmiContractConfigNew,
          functionName: "getCouponCode",
          args: [walletAddress],
        },
        {
          ...wagmiContractConfigNew,
          functionName: "referralEarningBNB",
          args: [walletAddress],
        },
        {
          ...wagmiContractConfigNew,
          functionName: "referralEarningUSDT",
          args: [walletAddress],
        },
        {
          ...wagmiContractConfigOld,
          functionName: "referralEarningBNB",
          args: [walletAddress],
        },
        {
          ...wagmiContractConfigOld,
          functionName: "referralEarningUSDT",
          args: [walletAddress],
        },
      ],
    });
    return result;
  }

  useEffect(() => {
    if (isSuccess) setFetchedData();
  }, [setFetchedData, walletAddress, isSuccess]);

  return (
    <div className="flex flex-col gap-8 h-full w-full">
      <div className="h-full w-full gap-2 flex flex-col justify-center">
        <h1 className="font-semibold text-lg">Referral URL:</h1>
        {!walletAddress ? (
          <p className="text-sm bg-red-500 w-fit px-2 py-1 rounded-md">
            Please connect your wallet
          </p>
        ) : isPending ? (
          <p>Loading...</p>
        ) : hasSetCoupon ? (
          <div className="flex items-center justify-between bg-[#F24C3D]/55 px-2 py-1 rounded-md">
            <p className="select-none">{couponCodeURL}</p>
            <span
              onClick={() => {
                navigator.clipboard.writeText(couponCodeURL);
                toast.success("link copied");
              }}
              className="cursor-pointer bg-[#F24C3D]/30 rounded-md hover:bg-[#F24C3D]/70 p-2"
            >
              <MdContentCopy />
            </span>
          </div>
        ) : (
          <div className="flex ">
            <div className=" group ">
              <input
                disabled={pendingState}
                type="text"
                className="disabled:cursor-not-allowed bg-transparent border-2 border-r-0 rounded-l-md md:w-auto w-full  border-[#b21111] outline-0 px-4 py-2 focus:border-[#b21111]"
                value={inputCouponCode}
                onChange={(e) => {
                  setInputCouponCode(e.target.value);
                }}
                placeholder={
                  pendingState ? "Generating a Coupon..." : "Generate coupon"
                }
              />
            </div>
            <button
              onClick={() => {
                setCoupon(inputCouponCode);
              }}
              disabled={pendingState}
              className="border-2 rounded-r-md disabled:cursor-not-allowed border-[#b21111] outline-0 px-2 md:px-4 focus:border-[#b21111]"
            >
              Generate
            </button>
          </div>
        )}

        {/* <div className="h-full w-full gap-2 flex flex-col justify-center">
          <h1 className="font-semibold text-lg">Coupon Code URL:</h1>
          {!walletAddress ? (
            <p className="text-sm bg-red-500 w-fit px-2 py-1 rounded-md">
              Please connect your wallet
            </p>
          ) : isPending ? (
            <p>Loading...</p>
          ) : hasSetCoupon ? (
            <div className="flex items-center gap-10 bg-[#F24C3D]/55 px-2 py-1 rounded-md">
              <p className="select-none">{couponCodeURL}</p>
              <span
                onClick={() => {
                  navigator.clipboard.writeText(couponCodeURL);
                  toast.success("link copied");
                }}
                className="cursor-pointer bg-[#F24C3D]/30 rounded-md hover:bg-[#F24C3D]/70 p-2"
              >
                <MdContentCopy />
              </span>
            </div>
          ) : (
            <p>Please set a coupon</p>
          )}
        </div> */}
      </div>
      <div className="h-full w-full gap-2 flex flex-col justify-center">
        <h1 className="font-semibold text-lg">Referral earning by USDT:</h1>
        {!walletAddress ? (
          <p className="text-sm bg-red-500 w-fit px-2 py-1 rounded-md">
            Please connect your wallet
          </p>
        ) : isPending ? (
          <p>Loading...</p>
        ) : (
          <p>
            {(referralEarningUSDT_NEW || referralEarningUSDT_OLD) &&
            Number(formatEther(referralEarningUSDT_NEW)) +
              Number(formatEther(referralEarningUSDT_OLD)) ===
              0
              ? "0"
              : Number(formatEther(referralEarningUSDT_NEW)) +
                Number(formatEther(referralEarningUSDT_OLD))}{" "}
            USDT
          </p>
        )}
      </div>
      <div className="h-full w-full gap-2 flex flex-col justify-center">
        <h1 className="font-semibold text-lg">Referral earning by BNB:</h1>
        {!walletAddress ? (
          <p className="text-sm bg-red-500 w-fit px-2 py-1 rounded-md">
            Please connect your wallet
          </p>
        ) : isPending ? (
          <p>Loading...</p>
        ) : (
          <p>
            {(referralEarningBNB_NEW || referralEarningBNB_OLD) &&
            Number(formatEther(referralEarningBNB_NEW)) +
              Number(formatEther(referralEarningBNB_OLD)) ===
              0
              ? "0"
              : Number(formatEther(referralEarningBNB_NEW)) +
                Number(formatEther(referralEarningBNB_OLD))}{" "}
            BNB
          </p>
        )}
      </div>
    </div>
  );
}
