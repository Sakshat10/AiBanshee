import { useAccount, useReadContracts, useWriteContract } from "wagmi";
import { config } from "../utils/config";
// import vestingContractAbi from "../utils/VESTING_CONTRACT_ABI.json";
import testVestingContractAbi from "../utils/VESTING_TEST_ABI.json";
import { ContractFunctionExecutionError, formatEther } from "viem";
import toast from "react-hot-toast";

export default function BalanceTab() {
  const { address: walletAddress } = useAccount();

  const vestingContractConfig = {
    // address: import.meta.env.VITE_VESTING_CONTRACT_ADDRESS,
    // abi: vestingContractAbi,
    address: "0x67182e362CEb450c7682Cd1aC68696f71B460dE1",
    abi: testVestingContractAbi,
  };

  const {
    writeContractAsync,
    isPending: claimPending,
    isSuccess: claimSuccess,
    isError: claimError,
  } = useWriteContract({ config });

  async function onSubmit(e) {
    e.preventDefault();
    try {
      toast.promise(
        writeContractAsync({
          ...vestingContractConfig,
          functionName: "claimBanshai",
          args: [walletAddress],
        }),

        {
          loading: "Claiming tokens",
          error: (error) => {
            if (
              error instanceof ContractFunctionExecutionError &&
              error.shortMessage.includes("vesting not starteed yet")
            ) {
              return "Vesting has not been started yet";
            }
            if (
              error instanceof ContractFunctionExecutionError &&
              error.shortMessage.includes("No tokens to claim")
            ) {
              return "No tokens to claim";
            }
            return "Something went wrong";
          },
          success: "Tokens claimed succesfully!!",
        }
      );
      console.log(claimError, claimPending, claimSuccess);
      console.log(data);
    } catch (error) {
      if (
        error instanceof ContractFunctionExecutionError &&
        error.shortMessage.includes("vesting not starteed yet")
      ) {
        toast.error("Vesting has not been started yet");
        return;
      }
      if (
        error instanceof ContractFunctionExecutionError &&
        error.shortMessage.includes("No tokens to claim")
      ) {
        toast.error("No tokens to claim");
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
        ...vestingContractConfig,
        functionName: "getTotoalToken",
        args: [walletAddress],
      },
      {
        ...vestingContractConfig,
        functionName: "getClaimableAmount",
        args: [walletAddress],
      },
    ],
  });

  return (
    <div className="flex flex-col pb-4 gap-8 h-full w-full">
      <div className="">
        <h2 className="font-semibold text-lg text-red-500">
          Thank you for participating in the presale! Your tokens are secured
          and will be claimable after the presale concludes.
        </h2>
      </div>

      <div className="h-full w-full gap-2 flex flex-col justify-center ">
        <h1 className="font-semibold text-lg">Balance: </h1>
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
          <p>{formatEther(data[0].result) + " BANSHAI"}</p>
        )}
      </div>
      <div className="h-full w-full gap-2 flex flex-col justify-center ">
        <h1 className="font-semibold text-lg">Claimable Amount: </h1>
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

      <div className="">
        <button
          disabled={!walletAddress}
          onClick={onSubmit}
          className="rounded-md hover:!rounded-md btn41-43 btn-43  w-fit overflow-hidden disabled:cursor-not-allowed  text-[1rem] shadow-md  "
        >
          Claim BANSHAI
        </button>
      </div>
    </div>
  );
}
