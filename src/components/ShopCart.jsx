import { useDispatch, useSelector } from "react-redux";
import Cart from "./shared/Cart";
import { Link } from "react-router-dom";
import { clear, checkout } from "../redux/cart/cartAction";

function ShopCart() {
  const cartState = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col md:flex-row gap-1 mt-32 ">
      <div className="w-full   ">
        {cartState.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      {cartState.itemsCounter > 0 && (
        <div className="p-10 bg-[#F8FFDB] m-4 md:w-1/3 md:h-full rounded-md shadow">
          <div className="flex flex-col gap-4 ">
            <span className="text-[#40394A] font-semibold">
              total Item : {cartState.itemsCounter}
            </span>
            <span className="text-[#40394A] font-semibold">
              total payments : {cartState.total}
            </span>

            <div className="flex justify-between">
              <button
                className="text-[#f33030] font-bold"
                onClick={() => dispatch(clear())}
              >
                Clear
              </button>
              <button
                className="py-1 px-2 text-md bg-[#38b82c] hover:bg-[#63d82d] shadow-md text-white rounded-md"
                onClick={() => dispatch(checkout())}
              >
                check Out
              </button>
            </div>
          </div>
        </div>
      )}

      {cartState.checkout && (
        <div className="flex flex-col p-10 bg-[#F8FFDB] gap-3 m-4 md:w-1/3 h-2/3 rounded-md shadow items-center">
          <span className="text-[#40394A] font-bold">
            Checked Out Succesfully
          </span>
          <Link
            className="py-1 px-2 text-md bg-[#f57373] hover:bg-[#f75d5d] text-white rounded-md"
            to="/product"
          >
            Buy More
          </Link>
        </div>
      )}
      {!cartState.checkout && cartState.itemsCounter === 0 && (
        <div className="flex flex-col p-10 bg-[#F8FFDB] gap-3 m-4 md:w-1/3 h-2/3 rounded-md shadow items-center">
          <span className="text-[#40394A] font-bold">Whant To Buy?</span>
          <Link
            className="py-1 px-2 text-md bg-[#f57373] hover:bg-[#f75d5d] text-white rounded-md"
            to="/product"
          >
            Go To Shop
          </Link>
        </div>
      )}
    </div>
  );
}

export default ShopCart;
