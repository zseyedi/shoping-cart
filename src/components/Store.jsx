import Product from "./shared/Product.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/products/productsAction";
import Loading from "./Loading.jsx";

function Store() {
  const productState = useSelector((state) => state.productsState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!productState.products.length) dispatch(fetchProducts());
  }, []);

  return (
    <>
      {/* <div className="grid grid-cols-1 mt-20 z-0 md:grid-cols-3 lg:grid-cols-4  gap-[1px]   bg-[#EEEEEE] ">
        {productData.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div> */}
      <div className="grid grid-cols-1 mt-20 z-0 md:grid-cols-3 lg:grid-cols-4  gap-[1px]   bg-[#EEEEEE] ">
        {productState.loading ? (
          <Loading />
        ) : productState.error ? (
          <p>somthing is wrong..</p>
        ) : (
          productState.products.map((product) => {
            return <Product key={product.id} productData={product} />;
          })
        )}
      </div>
    </>
  );
}

export default Store;
