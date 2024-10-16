import image from "./../assets/Frame.png";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md ">
      <img src={image} alt="" className=" m-3 sm:mx-7" />
      <div className="flex items-center space-x-2"></div>

      <div className="flex space-x-4">
        <button className="sm:px-4 sm:py-2 px-2 py-1 bg-black text-white rounded-md text-nowrap">
          Sign up
        </button>
        <button className="sm:px-4 sm:py-2 px-2 py-1 bg-black text-white rounded-md text-nowrap">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
