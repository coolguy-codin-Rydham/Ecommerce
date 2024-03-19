const Part3Mid = () => {

    const cateArr = [
        {
            imgUrl:"/CellPhone.svg",
            text:"Phones"
        },
        {
            imgUrl:"/Computer.svg",
            text:"Computers"
        },
        {
            imgUrl:"/SmartWatch.svg",
            text:"Smartwatch"
        },
        {
            imgUrl:"/Camera.svg",
            text:"Camera"
        },
        {
            imgUrl:"/Headphone.svg",
            text:"HeadPhones"
        },
        {
            imgUrl:"/Gamepad.svg",
            text:"Gaming"
        }
    ]
  return (
    <div className="flex flex-col items-center justify-between w-full py-6">
      <div className="flex items-center justify-between w-full">
        <div className="text-4xl font-semibold font-inter">
          Browse By Category
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
      <div className="grid w-full grid-cols-6">
        {
            cateArr.map((cate)=>(
                <div  key={cate.text} className="p-6">
                <div className="flex flex-col items-center justify-center px-3 border-2 py-9 border-slate-500">
                    <div><img src={cate.imgUrl} alt={cate.text} /></div>
                    <div>{cate.text}</div>
                </div>
                </div>
            ))
        }
        
      </div>
    </div>
  );
};

export default Part3Mid;
