export const Sponsors = () => {
  const sponsorData = [
    {
      img: "Images/Microsoft.png",
      alt: "Microsoft",
    },
    {
      img: "Images/Nvidia.png",
      alt: "Nvidia",
    },
    {
      img: "Images/BlueZilla.png",
      alt: "BlueZilla",
    },
    {
      img: "Images/OpenAI.png",
      alt: "OpenAI",
      width: 36, // Set width for OpenAI logo
    },

    {
      img: "Images/Coinbase.png",
      alt: "Coinbase",
    },
    {
      img: "Images/metrix.png",
      alt: "Metrix Capital",
    },
  ];

  return (
    <div className="relative z-10 py-16 ">
      <h1 className="text-center text-[2rem] pb-4 font-semibold">
        Partnership
      </h1>
      <div className="flex flex-wrap items-center justify-around gap-10 px-6 text-white max-md:gap-8">
        {sponsorData.map((sponsor, index) => (
          <div className="relative backdrop-blur-lg " key={index}>
            <img
              src={sponsor.img}
              alt={sponsor.alt}
              className={`w-${sponsor.width || 32} transition duration-300`} // Use specified width if available, otherwise default to 32
            />
          </div>
        ))}
      </div>
    </div>
  );
};
