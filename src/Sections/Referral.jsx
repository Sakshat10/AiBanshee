import ReferralCards from "../Components/ReferralCards";
import referralCardData from "../utils/referralCardData.json";

export default function Referral() {
  return (
    <section className="grid w-full min-h-screen grid-cols-1 gap-16 py-16 lg:grid-cols-2 lg:gap-8">
      <div className="flex flex-col justify-center h-full gap-10 px-4 sm:px-16 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-[1.5rem] md:text-[2rem]">Referral Program</h1>
          <p className="">
            Initiate your journey to financial success by investing a minimum of
            $100. Acquire $100 worth of BANSHAI tokens and establish your unique
            referral link. This endeavor not only unlocks a lucrative financial
            opportunity but also invites you to join a community that cherishes
            growth and collaboration. Share your link with others, and when they
            make a purchase using your referral, you&apos;ll be rewarded with a
            direct commission of up to 10%.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[1.5rem] md:text-[2rem]">
            Partnership Program for Crypto Influencers
          </h1>
          <p className="">
            Join the AIBanshee team&apos;s Partnership Program for Crypto
            Influencers and start earning today. Once you&apos;re on board,
            you&apos;ll get your exclusive referral link. Share it with your
            followers, and when they make a purchase using your link,
            you&apos;ll earn a direct commission of up to 10%. It&apos;s simple,
            it&apos;s rewarding, and it&apos;s a great way to grow your
            influence in the crypto space.
          </p>
        </div>
      </div>
      <div className="grid justify-items-center [grid-template-columns:repeat(auto-fit,minmax(15rem,1fr))] items-center gap-10 px-5 py-5 ">
        {referralCardData.map(
          (
            {
              title,
              price,
              totalSupply,
              tge,
              Vesting,
              usingPartnerReferralCode,
            },
            index
          ) => {
            return (
              <div
                key={index}
                className={` p-3 group [box-shadow:inset_5px_5px_5px_rgba(236,94,94,0.2),inset_-5px_-5px_15px_rgba(153,32,32,0.858),5px_5px_15px_rgba(237,109,109,0.3),-5px_-5px_15px_rgba(117,29,29,0.989)] rounded-lg bg-black w-fit`}
              >
                <ReferralCards
                  title={title}
                  price={price}
                  referralSystem={Vesting}
                  tge={tge}
                  totalSupply={totalSupply}
                  usingPartnerReferralCode={usingPartnerReferralCode}
                />
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
