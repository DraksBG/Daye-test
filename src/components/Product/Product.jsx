export const Product = (item) => {
  return (
    <div className={"flex items-center w-128 mx-5"}>
      <div className="flex bg-amber-50 rounded-2xl shadow my-5">
        <div className="flex-none w-24 md:w-48  relative">
          <img src={item.productImage} alt="shopping image"
               className="absolute rounded-lg inset-0 w-full h-full object-cover"/>
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-bold text-gray-700">
              Our New Certified Tampons
            </h1>
            <div className="text-xl font-bold text-gray-700">
              € {item.price}
            </div>
            <div className="w-full flex-none text-sm font-bold text-gray-800 mt-2">
              In your
              box you will
              have {item.tampons.length ? item.tampons.reduce((a, b) => Number(a.amount) + Number(b.amount)) : item.tampons.amount} tampons
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 font-bold text-gray-700">
            <div className="space-x-3 flex items-baseline">
              {
                item.tampons.length ? item.tampons.map((tampon) =>
                    <div className="flex flex-col">
                      <div
                        className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{tampon.amount}</div>
                      <span
                        className="mt-2 mr-2 text-base font-thin">{tampon.coating === "none" ? "NAKED" : tampon.coating}</span>
                      <span className="mt-2 mr-2 text-base uppercase">{tampon.size}</span>
                    </div>
                  ) :
                  (
                    <div className="flex flex-col">
                      <div
                        className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{item.tampons.amount}</div>
                      <span
                        className="mt-2 mr-2 text-base font-thin">{item.tampons.coating === "none" ? "NAKED" : item.tampons.coating}</span>
                      <span className="mt-2 mr-2 text-base uppercase">{item.tampons.size}</span>
                    </div>
                  )
              }

            </div>
          </div>
          <div className="flex mb-4 text-sm font-medium">
            <button type="button"
                    className="py-2 px-4  bg-amber-400 hover:bg-green-900 focus:ring-amber-500 focus:ring-offset-amber-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Buy now
            </button>
          </div>
          <p className="text-sm font-bold text-gray-700">
            Free shipping on all UK orders.
          </p>
        </form>
      </div>
    </div>
  )
}