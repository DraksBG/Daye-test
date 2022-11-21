export const Loader = () => {
  const circleCommonClasses = 'h-2.5 w-2.5 bg-current rounded-full';

  return (
    <div className='flex justify-center'>
    <span className="mr-5 text-3xl">Loading</span>
    <div className='flex mt-4'>
      <div className={`${circleCommonClasses} mr-1`}></div>
      <div className={`${circleCommonClasses} mr-1`}></div>
      <div className={`${circleCommonClasses}`}></div>
    </div>
    </div>
  );
};

export default Loader;