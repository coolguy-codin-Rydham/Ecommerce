import Part2Down from "./Part2Down";
import Part2Up from "./Part2Up";

const Part2 = () => {
  const prodArr = [
    {
      imgSrc: "/Console.svg",
      heading: "HAVIT HV-G92 GAMEPAD",
      price_new: "$120",
      price_old: "$160",
    },
    {
      imgSrc: "/KeyBoard.svg",
      heading: "AK-900 Wired Keyboard",
      price_new: "$960",
      price_old: "$1160",
    },
    {
      imgSrc: "/Desktop.svg",
      heading: "IPS LCD Gaming Monitor",
      price_new: "$370",
      price_old: "$400",
    },
    {
      imgSrc: "/Chair.svg",
      heading: "S-Series Comfort Chair",
      price_new: "$375",
      price_old: "$400",
    },
  ];

  return (
    <div className="">
      <Part2Up />
      <div className="grid h-full grid-cols-4 py-8">
        {
          prodArr.map((prod)=>{
            return (
              <div key={prod.heading} className="flex flex-col items-center justify-center">
                <div><img src={prod.imgSrc} alt="" /></div>
                <div className="w-full py-3 font-semibold px-11 font-poppins">{prod.heading}</div>
                <div className="flex items-center w-full gap-3 px-11">
                  <div className="text-lg font-semibold">{prod.price_new}</div>
                  <div className="text-lg font-semibold"><del>{prod.price_old}</del></div>
                </div>
              </div>
            )
          })
        }
      </div>
      <Part2Down />
    </div>
  );
};

export default Part2;
