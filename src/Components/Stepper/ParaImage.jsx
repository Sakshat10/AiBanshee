export const ParaImage = ({ index, words }) => {
  return (
    <>
      <div className=" left-0 flex items-start justify-center w-screen   lg:mt-0 lg:pt-16 ">
        <div className="flex flex-col lg:flex-row w-screen px-8 h-[90%] lg:justify-around lg:items-center">
          <div className="overflow-hidden h-[38vh]  rounded-lg lg:h-[60vh]">
            <img
              className="h-[40vh] relative z-[1] lg:object-contain mx-auto w-[85vw] py-[3rem] lg:py-0 lg:w-[55vw] lg:h-[60vh]"
              src={`./Images/img${index}.jpg`}
              alt={index}
            ></img>
          </div>
          <p className=" text-[0.8rem] lg:text-[1.1rem] mx-auto w-[85vw] pt-8 text-white lg:pt-0 lg:w-[30%] lg:h-[70%]   flex items-center  ">
            {words}
          </p>
        </div>
      </div>
    </>
  );
};
