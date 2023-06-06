/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const Detailes = (props) => {
  const params = useParams();
  const id = params.id;
  const data = useSelector((state) => state.productsState.products);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;

  return (
    <>
      <div className="flex justify-center mt-16  h-screen bg-[#EEEEEE] ">
        <div className="flex h-4/5 gap-10 p-5 bg-white shadow-md justify-center items-center">
          <img className="w-80 h-96 rounded-lg" src={image} />
          <div className="shadow p-10 rounded-3xl bg-[#F8FFDB]">
            <h3 className="font-bold text-2xl text-[#14C38E]">{title}</h3>
            <p className="my-10">{description}</p>
            <p>
              <span className="text-[#14C38E] font-bold">Category: </span>
              {category}
            </p>
            <div className="flex justify-between mt-2">
              <span className="font-semibold text-[#b2d483] text-lg">
                {price} $
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_ITEM", payload: product })
                  }
                  className="py-1 px-2 text-md bg-[#f57373] hover:bg-[#f75d5d] text-white rounded-md"
                >
                  add to card
                </button>
                <Link
                  to="/product"
                  className="py-1 px-2 text-md bg-[#f33030] hover:bg-[#e72020] text-white rounded-md"
                >
                  back to shope
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailes;
