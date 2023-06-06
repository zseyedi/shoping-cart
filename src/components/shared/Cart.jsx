import { shorten } from "../../helper/function";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../../redux/cart/cartAction";
function Cart({ data }) {
  // const { image, title, price, quantity } = props.data;
  const dispatch = useDispatch();
  return (
    <div className="mx-5 my-4 p-4 border-2 border-[#F8FFDB] gap-15 md:gap-20 flex h-32  rounded-lg items-center">
      <div className="w-20 h-full flex flex-col items-center">
        <img className="h-full w-auto object-contain" src={data.image} />
      </div>
      <div className="flex flex-1 flex-col gap-2 items-center">
        <h3 className="font-bold text-[#293462]">{shorten(data.title)}</h3>
        <span className="text-[#54B435] font-semibold">{data.price} $</span>
      </div>
      <span className="outline-none text-md font-bold bg-[#998CEB] py-1 px-3 text-white rounded-xl shadow">
        {data.quantity}
      </span>
      <div className="flex p-1 justify-center items-center  ">
        <div className="flex gap-1">
          {data.quantity > 1 ? (
            <button
              onClick={() => dispatch(decrease(data))}
              className="outline-none text-md font-extrabold bg-[#FF7D7D] hover:bg-[#f75d5d] py-2 px-2 text-white rounded-xl shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M19 12.998H5v-2h14z" />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => dispatch(removeItem(data))}
              className="outline-none  bg-[#FF7D7D] hover:bg-[#f75d5d] p-2 text-white rounded-xl shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 14 14"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  d="M1 3.5h12m-10.5 0h9v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9h0Zm2 0V3a2.5 2.5 0 0 1 5 0v.5m-4 2V11m3-5.5V11"
                />
              </svg>
            </button>
          )}
          {
            <button
              onClick={() => {
                dispatch(increase(data));
              }}
              className="outline-none text-md font-extrabold bg-[#FF7D7D] hover:bg-[#f75d5d] py-2 px-2 text-white rounded-xl shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                />
              </svg>
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Cart;
