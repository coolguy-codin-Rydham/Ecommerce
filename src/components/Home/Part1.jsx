import "./Part1.css"
const Part1 = () => {

    const part1List = ["Woman's Fashion", "Men's Fashion","Electronics","Home and Lifestyle","Medicine","Sports & Outdoor", "Baby's & Toys","Groceries & Pets","Health & Beauty"];

  return (
    <div className="pt-10 pb-20 makeGrid">
        <div className="List">
            <ul className="flex flex-col justify-between w-full gap-4 text-xl font-semibold font-poppins">
                {part1List.map((item, index)=>{
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>

        </div>
        <div className="flex items-center justify-center p-6 Image"><img className="w-[80%]" src="/Iphone.svg" alt="" /></div>
    </div>

  )
}

export default Part1
