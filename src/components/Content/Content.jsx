export const Content = () => {
  return (
    <div className="bg-amber-100 mt-10">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <div
                className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:leading-none">
                Periods, get some chill
                <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"/>
              </span>
              </div>
              <p className="text-base text-gray-700 md:text-lg">
                Take your day back with Daye’s CBD tampons for feel-good periods. Delivered conveniently to your door
                and
                with a money-back satisfaction guarantee.
              </p>
            </div>
            <div className="flex mb-4 text-sm font-medium">
              <a href={"https://yourdaye.com/"}>
                <button type="button"
                        className="py-4 px-4 bg-pink-300 hover:bg-green-900 focus:ring-amber-500 focus:ring-offset-amber-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  FOR MORE INFO CLICK HERE
                </button>
              </a>
            </div>
          </div>
          <div className="bg-rose-100">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://yourdaye.com/static/home-hero-mobile-hands-c5ab55c2b2c438dd938394bde1103351.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};