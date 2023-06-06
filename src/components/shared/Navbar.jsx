import { useContext } from "react";
import { CardContext } from "../../context/CardContextsProvider";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { state } = useContext(CardContext);

  return (
    <div className="flex py-4 px-10 justify-between items-center shadow-md">
      <Link
        to="/products"
        className="text-[#293462] underline underline-offset-auto font-bold"
      >
        products
      </Link>
      <div className="flex relative p-2 text-[#293462] ">
        <Link to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM7 17q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1.975q-.425 0-.7-.288T1 3q0-.425.288-.713T2 2h1.625q.275 0 .525.15t.375.425L5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4q-.275.5-.725.775T15.55 13H8.1L7 15h11.025q.425 0 .7.288T19 16q0 .425-.288.713T18 17H7Zm1.55-6h7h-7Z"
            />
          </svg>
        </Link>
        <span className="absolute h-[20px] w-[20px] bg-[#293462] font-semibold text-white text-center text-sm rounded-full -top-1 -right-1">
          {state.itemsCounter}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
