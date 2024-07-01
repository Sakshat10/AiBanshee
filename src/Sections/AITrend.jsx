export const AITrend = () => {
  return (
    <div className=" min-h-[75vh] flex items-center justify-center  w-full py-[6rem] md:pt-[3rem] lg:pt-[4rem]">
      <div className="flex flex-col items-center sm:justify-between md:gap-3 lg:gap-6 lg:flex-row">
        {/* Image */}
        <div className="w-[80vw] md:w-[70vw] lg:w-[42vw]  lg:h-[60vh] relative z-[2]  flex justify-center">
          <img src="Images/AIimage.webp" alt="AI trend image"></img>
        </div>
        <div className="flex flex-col gap-4   w-[80vw] lg:w-[42vw] pt-[4rem] lg:justify-center text-wrap">
          <h1 className="text-[2rem]">Where is the AI industry heading?</h1>
          <p>
            The AI industry is on the cusp of a major breakthrough. With recent
            advances in deep learning, AI is now capable of tasks that were once
            thought impossible, such as driving cars, writing poetry, and even
            composing music. The potential applications of AI are endless. AI
            can be used to improve healthcare, education, transportation, and
            many other industries. As AI continues to develop, it is likely to
            have a profound impact on our lives. With AI&apos;s ever-growing
            capabilities, there is a pressing need for ethical considerations to
            ensure its deployment aligns with human values and societal
            well-being, fostering a future where innovation and compassion
            intersect harmoniously.
          </p>
        </div>
      </div>
    </div>
  );
};
