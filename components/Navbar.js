const NavBar = () => {

  return (
    <div className="flex items-center justify-between w-full h-14 xl:h-20 bg-gray-800 text-white px-5 sticky top-0">
        <div className="ml-5 font-bold">Emmanuel</div>
        <div className="flex items-center justify-between w-[50%] sm:w-[30%] xl:w-[20%]">
            <div className="cursor-pointer hover:text-gray-300 transition duration-300 text-sm sm:text-md xl:font-bold">Gallery</div>
            <div className="bg-white text-gray-900 px-1 py-1 xl:px-2 xl:py-2 rounded-sm text-sm xl:text-md sm:font-bold cursor-pointer hover:bg-gray-500 hover:text-white transition duration-300">{`Let's connect`}</div>
        </div>
    </div>
  );
};

export default NavBar;
