import { useState } from "react";
import toast from "react-hot-toast";
import { useAccount, useWriteContract } from "wagmi";
import { config } from "../../utils/config";
// import stakingContractABI from "../../utils/STAKING_CONTRACT_ABI.json";
import testStakingContractABI from "../../utils/STAKING_TEST_ABI.json";
import testAibansheeTokenAbi from "../../utils/AIBANSHEE_TOKEN_CONTRACT_TEST_ABI.json";
import { ContractFunctionExecutionError, parseEther } from "viem";
import { waitForTransactionReceipt } from "@wagmi/core";

export default function StakingTab() {
  const [stakingDuration, setStakingDuration] = useState("1");
  const [stakingAmount, setStakingAmount] = useState("");

  const { address: walletAddress } = useAccount();

  const { writeContractAsync } = useWriteContract({ config });

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const hash = await toast.promise(
        writeContractAsync({
          abi: testAibansheeTokenAbi,
          address: "0x86090E2f67d2C124ede5B9A77115F19C05C21781",
          functionName: "approve",
          args: [
            "0x20f15EFb4599d886B23D2A12C23C5CaE45ca58B1",
            parseEther(stakingAmount),
          ],
        }),
        {
          success: "Transfer approved",
          loading: "Waiting for approval...",
          error: (error) => {
            if (
              error instanceof ContractFunctionExecutionError &&
              error.shortMessage.includes("Amount must be greater than 0")
            ) {
              return "Amount must be greater than 0";
            }
            if (
              error instanceof ContractFunctionExecutionError &&
              error.shortMessage.includes("you can not add more token!")
            ) {
              return "You can not add more tokens!";
            }
            if (
              error instanceof ContractFunctionExecutionError &&
              error.shortMessage.includes("you selected wrong duration")
            ) {
              return "You selected wrong duration";
            }
            return "Something went wrong";
          },
        }
      );

      await toast.promise(
        waitForTransactionReceipt(config, { hash, confirmations: 5 }),
        {
          success: "approval confirmed",
          loading: "Waiting for approval to be confirmed",
          error: (error) => {
            if (
              error instanceof ContractFunctionExecutionError &&
              error.shortMessage.includes("Amount must be greater than 0")
            ) {
              return "Amount must be greater than 0";
            }
            if (
              error instanceof ContractFunctionExecutionError &&
              error.shortMessage.includes("you can not add more token!")
            ) {
              return "You can not add more tokens!";
            }
            if (
              error instanceof ContractFunctionExecutionError &&
              error.shortMessage.includes("you selected wrong duration")
            ) {
              return "You selected wrong duration";
            }
            return "Something went wrong";
          },
        }
      );
      toast.promise(
        writeContractAsync({
          // abi: stakingContractABI,
          abi: testStakingContractABI,
          // address: import.meta.env.VITE_STAKING_CONTRACT_ADDRESS,
          address: "0x20f15EFb4599d886B23D2A12C23C5CaE45ca58B1",
          functionName: "stakeTokens",
          args: [parseEther(stakingAmount), Number(stakingDuration)],
        }),
        {
          success: "Tokens staked successfully",
          loading: "Waiting for approval...",
          error: (error) => {
            if (
              error instanceof ContractFunctionExecutionError &&
              error.shortMessage.includes("Amount must be greater than 0")
            ) {
              return "Amount must be greater than 0";
            }
            if (
              error instanceof ContractFunctionExecutionError &&
              error.shortMessage.includes("you can not add more token!")
            ) {
              return "You can not add more tokens!";
            }
            if (
              error instanceof ContractFunctionExecutionError &&
              error.shortMessage.includes("you selected wrong duration")
            ) {
              return "You selected wrong duration";
            }
            return "Something went wrong";
          },
        }
      );
    } catch (error) {
      if (
        error instanceof ContractFunctionExecutionError &&
        error.shortMessage.includes("Amount must be greater than 0")
      ) {
        toast.error("Amount must be greater than 0");
        return;
      }
      if (
        error instanceof ContractFunctionExecutionError &&
        error.shortMessage.includes("you can not add more token!")
      ) {
        toast.error("You can not add more tokens!");
        return;
      }
      if (
        error instanceof ContractFunctionExecutionError &&
        error.shortMessage.includes("you selected wrong duration")
      ) {
        toast.error("You selected wrong duration");
        return;
      }
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col w-full h-full gap-5 pb-4 md:w-auto">
      {/* <div className=""> */}
      {/* <h1 className="font-semibold text-[1.2rem]">Round 2</h1> */}

      {/* <h1 className="font-bold text-[#ff0000]">Staking Coming Soon</h1>
      </div> */}

      <form
        onSubmit={onSubmit}
        action="#"
        className="flex flex-col justify-between h-full gap-5"
      >
        <div className="flex">
          <input
            type="text"
            className="disabled:cursor-not-allowed bg-transparent border-2 w-[100%] rounded-l-md border-r-0 border-[#b21111] outline-0 px-4 py-2 focus:border-[#b21111]"
            placeholder="Enter amount in ethers"
            value={stakingAmount}
            onChange={(e) => {
              const value = e.target.value;

              // Validate if the input is a valid number or empty
              if (/^\d*\.?\d*$/.test(value)) {
                setStakingAmount(value); // Update state with the valid input
              }
            }}
          />
          <select
            name="token"
            id="token"
            value={stakingDuration}
            onChange={(e) => {
              setStakingDuration(e.target.value);
            }}
            className="  bg-transparent border-2  rounded-r-md  border-[#b21111] outline-0 px-1 md:px-2 py-2 focus:border-[#b21111]"
          >
            <option
              value="1"
              className="text-black bg-transparent appearance-none"
            >
              1 month
            </option>
            <option
              value="2"
              className="text-black bg-transparent appearance-none"
            >
              3 months
            </option>
          </select>
        </div>

        <button
          disabled={!walletAddress}
          type="submit"
          href="/buttons/43"
          className="rounded-md hover:!rounded-md btn41-43 btn-43 overflow-hidden disabled:cursor-not-allowed !w-[100%]"
        >
          Stake
        </button>
      </form>
    </div>
  );
}
