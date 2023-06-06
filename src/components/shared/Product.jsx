/* eslint-disable react/prop-types */
import { shorten } from "../../helper/function";
//import { isInCard, quantityCounter } from "../../helper/function";
import { Link } from "react-router-dom";

function Product({ productData }) {
  return (
    <div className="flex flex-col items-start h-96 w-full gap-2 bg-[#F8FFDB]   border-[#f2f2f2] hover:z-10  overflow-hidden hover:shadow-[0px_1px_11px_5px_#EEEEEE]">
      <div className="h-full w-full overflow-hidden  flex justify-around bg-white p-6">
        <img className="h-full" src={productData.image} />
      </div>
      <div className="flex flex-col p-4 gap-1  w-full">
        <h3 className="font-bold text-[#293462]">
          {shorten(productData.title)}
        </h3>
        <p className="text-[#54B435] font-semibold">{productData.price} $</p>

        <div className="flex justify-between items-center mt-5">
          <Link
            to={`/products/${productData.id}`}
            className="text-[#b2d483] font-semibold hover:text-[#54B435]"
          >
            Details
          </Link>
          <div className="flex gap-1">
            {/* {quantityCounter(state, product.id) > 1 && (
              <button
                onClick={() => dispatch({ type: "DECREASE", payload: product })}
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
            )}
            {quantityCounter(state, productData.id) === 1 && (
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: productData })
                }
                className="outline-none text-md font-extrabold bg-[#FF7D7D] hover:bg-[#f75d5d] py-1 px-2 text-white rounded-xl shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
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
            {quantityCounter(state, productData.id) > 0 && (
              <span className="p-1 font-bold text-[#293462]">
                {quantityCounter(state, productData.id)}
              </span>
            )}
            {isInCard(state, productData.id) ? (
              <button
                onClick={() => {
                  console.log("clicked inc");
                  dispatch({ type: "INCREASE", payload: productData });
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
            ) : (
              <button
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: productData })
                }
                className="outline-none bg-[#FF7D7D] hover:bg-[#f75d5d] py-1 px-2 text-white rounded-xl shadow"
              >
                add to card
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
