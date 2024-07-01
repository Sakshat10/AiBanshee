export const Partnership = () => {
  const sponsorData = [
    {
      img: "Images/BlueZilla.png",
      alt: "BlueZilla",
    },
    {
      img: "Images/Nvidia.png",
      alt: "Nvidia",
    },
    {
      img: "Images/Microsoft.png",
      alt: "Microsoft",

      // Set width for OpenAI logo
    },
    {
      img: "Images/metrix.png",
      alt: "Metrix Capital",
      width: 36,
    },
    {
      img: "Images/OpenAI.png",
      alt: "OpenAI",
      width: 36,
    },
  ];

  return (
    <div className="relative z-10 hidden lg:block">
      <div className="flex flex-wrap items-center justify-around gap-10 px-6 text-white max-md:gap-8">
        {sponsorData.map((sponsor, index) => (
          <div className="relative backdrop-blur-sm" key={index}>
            <img
              src={sponsor.img}
              alt={sponsor.alt}
              // style={{ width: 150 }}
              className={`w-32 grayscale hover:grayscale-0  transition duration-300`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
