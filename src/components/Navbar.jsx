import { Link } from "react-router-dom";

const Navbar = () => {
  const ListItms = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Contact",
      link: "contact",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Sign Up",
      link: "signup",
    },
  ];

  return (
    <div className="flex items-end justify-center pt-10">
      <div className="max-w-[1500px] w-full justify-between items-center h-full flex py-2">
        <div className="w-full font-[800] text-[24px] text-shadow font-inter">
          Exclusive
        </div>
        <div className="w-full">
          <ul className="flex items-center justify-around">

            {ListItms.map((item, index) => (
              <Link to={item.link} className="text-lg font-semibold cursor-pointer" key={index}>
                {item.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-end w-full h-full gap-5">
          <input
            type="text"
            className="bg-[#F5F5F5] px-4 py-3 rounded-lg"
            placeholder="what are you looking for?"
          />
          <img
            src="/heart.svg"
            className="cursor-pointer"
            height={"22.5rem"}
            width={"22.5rem"}
            alt=""
          />
          <img
            src="/cart.svg"
            className="cursor-pointer"
            height={"22.5rem"}
            width={"22.5rem"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
