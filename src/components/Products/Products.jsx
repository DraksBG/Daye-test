import Loader from "../Common/Loader.jsx";
import {useProduct} from "./hooks/useProduct.jsx";
import {Product} from "../Product/Product.jsx";

export const Products = () => {
  const { data = [] } = useProduct();
  return (
    <>
      <div className="flex justify-center w-full my-5 ">
        <p className="font-semi-bold text-gray-600 text-3xl">Checkout our products</p>
      </div>
      <div className="flex justify-center flex-wrap w-full">
        {
          data.length ? data.map((item) => <Product {...item}/>) : <Loader/>
        }
      </div>
    </>
  )
}