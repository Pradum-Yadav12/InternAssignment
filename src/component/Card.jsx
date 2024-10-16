/* eslint-disable react/prop-types */
import { MdKeyboardArrowRight } from "react-icons/md";
export const Card = ({ data }) => {
  return (
    <div className=" m-1 bg-[#F2FAF5] rounded-lg mt-5">
      <img src={data.image} alt="" />
      <h2 className=" sm:text-[17px] font-semibold text-green-500">
        {data.heading}
      </h2>
      <p className="sm:text-[15px]">{data.text}</p>
    </div>
  );
};

export const MainCard = ({ data }) => {
  return (
    <>
      <div className=" flex  mt-[8vh]">
        <img src={data.image} alt="" className=" bg-cover w-[70px]" />
        <div className=" ml-4 bg-slate-200  rounded-lg p-2  sm:w-[70%] w-full">
          <h5 className="text-green-500">{data.heading}</h5>
          <p>{data.text}</p>
        </div>
      </div>
    </>
  );
};

export const TestiMonialCard = ({ data }) => {
  return (
    <div className=" p-3 border border-slate-400  border-t-0 border-l-0 border-r-0 flex justify-between">
      <p className=" ">{data.text}</p>
      <MdKeyboardArrowRight />
    </div>
  );
};
export const Button = ({ btnText }) => {
  return (
    <button className=" text-white bg-black p-2 rounded-lg m-3">
      {btnText}
    </button>
  );
};
