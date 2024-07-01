function Card({ icon, title, content }) {
  return (
    <div className="relative grid grid-cols-1 card">
      <div className="face face1">
        <div className="content">
          <h1 className="text-[1.5rem] bold">{title}</h1>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p className="text-[#f7d8d8]">{content}</p>
          <a
            className="!rounded !text-[#f7d8d8]"
            href="https://aibanshee.com/product"
            target="_blank"
            type="button"
          >
            Try out{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

function Business() {
  return (
    <div className="py-[2rem] relative">
      <figure
        aria-hidden
        className="bg-[#C81D5B] w-36 h-36 sm:w-52 sm:h-52 bg-blend-luminosity blur-[100px]  absolute  -bottom-12 sm:-bottom-6 left-0"
      />
      <h1 className="text-center text-[2rem] font-semibold ">Business Model</h1>
      <div className="!w-full  container11 block ">
        <Card
          icon={<i className="fab fa-windows"></i>}
          title="Subscriptions"
          content="AIBanshee will offer a subscription-based service that gives users access to its AI-powered tools and features."
        />
        <Card
          icon={<i className="fab fa-android"></i>}
          title="Advertising"
          content="AIBanshee will also generate revenue through advertising. The company will sell advertising space on its website and in its mobile app."
        />
        <Card
          icon={<i className="fab fa-apple"></i>}
          title="Data licensing"
          content="AIBanshee will also generate revenue by licensing its data to other companies. This data can be used by businesses to improve their products and services, or to gain insights into their customers."
        />
      </div>
    </div>
  );
}

export default Business;
