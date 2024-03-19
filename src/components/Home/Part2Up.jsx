const Part2Up = () => {
  return (
    <div className="h-full">
      <div className="flex items-start">
        <div className="flex items-center justify-center gap-3 font-semibold font-poppins">
          <div className="h-10 bg-[#DB4444] rounded w-7"></div>
          <div className="text-[#DB4444]">Today&apos;s</div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex py-2">
          <div className="pt-[0.3rem] pr-10 ">
            <h1 className="text-[36px] font-semibold font-inter">
              Flash Sales
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col font-inter">
              <p className="text-[0.6rem]">Days</p>
              <p className="text-3xl font-bold">03</p>
            </div>
            <span className="pt-2 text-3xl text-[#DB4444]">:</span>
            <div className="flex flex-col font-inter">
              <p className="text-[0.6rem]">Hours</p>
              <p className="text-3xl font-bold">23</p>
            </div>
            <span className="pt-2 text-3xl text-[#DB4444]">:</span>
            <div className="flex flex-col font-inter">
              <p className="text-[0.6rem]">Minutes</p>
              <p className="text-3xl font-bold">19</p>
            </div>
            <span className="pt-2 text-3xl text-[#DB4444]">:</span>

            <div className="flex flex-col font-inter">
              <p className="text-[0.6rem]">Seconds</p>
              <p className="text-3xl font-bold">56</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 pb-2">
          <div className="text-4xl cursor-pointer pb-2 items-center rounded-full px-2 justify-center flex bg-[#cecccc]">
            &#8592;
          </div>
          <div className="text-4xl pb-2 items-center cursor-pointer justify-center px-2 rounded-full flex bg-[#cecccc]">
            &#8594;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part2Up;
