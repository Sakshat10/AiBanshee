export default function ReferralCards({
  title,
  price,
  totalSupply,
  tge,
  referralSystem,
}) {
  return (
    <div className="group p-3 min-w-[14rem] max-w-[18rem] border-[1px] border-[#411212] rounded-md group-hover:-translate-y-9 transition-all duration-300 bg-inherit ">
      <div className="">
        <h1 className="text-[2rem] mb-6 text-center">{title}</h1>
        <p>
          <span className="text-[1rem] font-semibold text-red-500">
            Price:{" "}
          </span>
          <span>{price}</span>
        </p>
        <br />
        <p>
          <span className="text-[1rem] font-semibold text-red-500">
            Total supply:{" "}
          </span>
          <span>{totalSupply}</span>
        </p>
        <br />
        <p>
          {" "}
          <span className="text-[1rem] font-semibold text-red-500">TGE: </span>
          <span>{tge}</span>
        </p>
        <br />
        <p>
          <span className="text-[1rem] font-semibold text-red-500">
            Vesting:{" "}
          </span>
          <span>{referralSystem}</span>
        </p>
        <br />
      </div>
    </div>
  );
}
