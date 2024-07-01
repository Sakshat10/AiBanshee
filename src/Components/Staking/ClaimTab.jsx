import toast from "react-hot-toast";
// import stakingContractAbi from "../../utils/STAKING_CONTRACT_ABI.json";
import testStakingContractAbi from "../../utils/STAKING_TEST_ABI.json";
import { config } from "../../utils/config";
import { useAccount, useReadContracts } from "wagmi";
import { ContractFunctionExecutionError, formatEther } from "viem";
import { useWriteContract } from "wagmi";
export default function ClaimTab() {
  const { writeContractAsync } = useWriteContract({ config });

  const stakingContractConfig = {
    // address: import.meta.env.VITE_STAKING_CONTRACT_ADDRESS,
    // abi: stakingContractAbi,
    address: "0x20f15EFb4599d886B23D2A12C23C5CaE45ca58B1",
    abi: testStakingContractAbi,
  };

  const { address: walletAddress } = useAccount();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await toast.promise(
        writeContractAsync({
          ...stakingContractConfig,
          functionName: "claim",
        }),
        {
          success: "Tokens claimed successfully",
          loading: "Waiting for approval...",
          error: (error) => {
            if (
              error instanceof ContractFunctionExecutionError &&
              error.shortMessage.includes("No token staked")
            ) {
              return "You have not staked any tokens";
            }
            if (
              error instanceof ContractFunctionExecutionError &&
              error.shortMessage.includes("stake duration not ended")
            ) {
              return "Stake duration has not ended yet";
            }
            if (error.name === "ConnectorNotConnectedError") {
              return "Please connect your wallet";
            }
            return "Something went wrong";
          },
        }
      );
    } catch (error) {
      if (
        error instanceof ContractFunctionExecutionError &&
        error.shortMessage.includes("No token staked")
      ) {
        toast.error("You have not staked any tokens");
        return;
      }
      if (
        error instanceof ContractFunctionExecutionError &&
        error.shortMessage.includes("stake duration not ended")
      ) {
        toast.error("Stake duration has not ended yet");
        return;
      }
      if (error.name === "ConnectorNotConnectedError") {
        toast.error("Please connect your wallet");
        return;
      }
      toast.error("Something went wrong");
    }
  }

  const {
    data,
    isPending,
    isError: error,
  } = useReadContracts({
    config,
    contracts: [
      {
        ...stakingContractConfig,
        functionName: "getRewards",
        args: [walletAddress],
      },
      {
        ...stakingContractConfig,
        functionName: "getStakedToken",
        args: [walletAddress],
      },
    ],
  });
  return (
    <div className="flex flex-col w-full h-full gap-5 pb-4 md:w-auto">
      <div className="">
        <h2 className="font-semibold text-lg text-red-500">
          Thank you for staking! Your tokens are now securely locked in the
          staking contract. You will be able to claim both your tokens and
          rewards earned after the completion of the stake duration.
        </h2>
      </div>

      {/* <h1 className="font-semibold text-[1.2rem]">Round 2</h1> */}

      <div className="h-full w-full gap-2 flex flex-col justify-center ">
        <h1 className="font-semibold text-lg">Stake Amount: </h1>
        {!walletAddress ? (
          <p className="text-sm bg-red-500 w-fit px-2 py-1 rounded-md">
            Please connect your wallet
          </p>
        ) : isPending ? (
          <p className="text-sm  w-fit px-2 py-1 rounded-md">loading...</p>
        ) : error ? (
          <p className="text-sm text-red-500 w-fit px-2 py-1 rounded-md">
            There was some error
          </p>
        ) : (
          <p>{formatEther(data[1].result) + " BANSHAI"}</p>
        )}
      </div>
      <div className="h-full w-full gap-2 flex flex-col justify-center ">
        <h1 className="font-semibold text-lg">Reward Amount: </h1>
        {!walletAddress ? (
          <p className="text-sm bg-red-500 w-fit px-2 py-1 rounded-md">
            Please connect your wallet
          </p>
        ) : isPending ? (
          <p className="text-sm  w-fit px-2 py-1 rounded-md">loading...</p>
        ) : error ? (
          <p className="text-sm text-red-500 w-fit px-2 py-1 rounded-md">
            There was some error
          </p>
        ) : (
          <p>
            {data[0].status !== "failure"
              ? formatEther(data[0].result) + " BANSHAI"
              : "0 BANSHAI"}
          </p>
        )}
      </div>

      {/* <div>
        <p className="text-lg text-red-500 ">Staking not started yet.</p>
      </div> */}

      <form
        onSubmit={onSubmit}
        action="#"
        className="flex flex-col justify-between h-full gap-5"
      >
        <button
          disabled={!walletAddress}
          type="submit"
          href="/buttons/43"
          className="rounded-md hover:!rounded-md btn41-43 btn-43  w-fit overflow-hidden disabled:cursor-not-allowed text-[1rem] shadow-md  "
        >
          Claim
        </button>
      </form>
    </div>
  );
}
