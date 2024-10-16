import image from "./../assets/truck-dLHB36Ze6b.png";
import banner from "./../assets/banner.png";
import { Button, Card, MainCard, TestiMonialCard } from "./Card";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Main = () => {
  const MainCardDara = [
    {
      image: "/Transaction.png",
      heading: "Reliable Income",
      text: "Earn a steady income with consistent delivery requests.",
    },
    {
      image: "/Schedule.png",

      heading: "Flexible Schedule",

      text: "Choose your working hours and balance your personal life.",
    },
    {
      image: "/OnlineSupport.png",
      heading: "Support ",

      text: "Access our dedicated support team whenever you need assistance.",
    },
    {
      image: "/Increase.png",
      heading: "Reliable Income",
      text: "Advance your career with regular training and development programs.",
    },
  ];
  const Cards = [
    {
      image: "/person.png",
      heading: "Register Online",
      text: "Fill out our easy online application form and pay the registration fee of Rs. 999",
    },
    {
      image: "/Verified.png",
      heading: "Get Verified",
      text: "Complete the verification process to ensure you meet our standards.",
    },
    {
      image: "/Car.png",
      heading: "Start Driving",
      text: "Once approved, start accepting delivery requests and earn money",
    },
  ];
  const TestimonialText = [
    {
      id: 1,
      text: "What type of vehicles are eligible?",
    },
    {
      id: 2,
      text: "How do I  get paid ?",
    },
    {
      id: 3,
      text: "How do I get paid?",
    },
    {
      id: 4,
      text: "What type of vehicles are eligible?",
    },
    {
      id: 5,
      text: "What areas does MyFastX operate in?",
    },
  ];
  return (
    <>
      <div className=" sm:flex mt-[5vh]">
        <div className=" sm:w-[29%] w-full text-center p-3 bg-slate-100  flex-col justify-center  items-center">
          <img
            src={image}
            alt=""
            className=" mx-4 my-5 
           w-[98%]"
          />
          <div>
            <h1>Welcome to my FastXPartener</h1>
          </div>
          <div>
            <h1 className="font-bold text-green-400">
              Quick & Reliable Delivery and Logistics Solution
            </h1>
          </div>
          <div>
            <p className="text-[15px]">
              At MyFastX we are revolutionizing the delivery and logistics
              industry by providing swift, dependable services to our
              clients.Our mission is to ensure every package reaches its
              destination on time,every time.
            </p>
          </div>
        </div>
        <div
          className="sm:w-[69%] p-3 w-full bg-slate-100
      sm:ml-[1%]"
        >
          <img src={banner} alt="" className="w-full" />
          <div>
            <p className=" text-green-500 mt-[3vh]">
              Drive Your Success with MyFastX
            </p>
            <h4 className=" font-semibold">Join Us as a Partner Driver</h4>
            <p className=" sm:text-[18px] text-[15px] ">
              Are you a vehicle owner looking for new opportunities? Join
              MyFastX today and become part of a dynamic network of drivers.
              With us, you’ll enjoy flexible work hours, competitive earnings,
              and the satisfaction of delivering smiles across the city.
            </p>
          </div>
          <Button btnText={"Register now for just Rs. 999!"} />

          <div className="  grid sm:grid-cols-4 grid-cols-2">
            {MainCardDara.map((data, i) => (
              <Card key={i} data={data} />
            ))}
          </div>
        </div>
      </div>
      <main className=" mt-[5vh]">
        <span className="bg-slate-200 border-green-300 border-r-0 border-t-0 border-b-0  border-l-4 p-2 mt-[5vh] m-2 ">
          How it Works
        </span>
        <h1 className="sm:text-[30px] text-[25px]  font-bold m-2">
          Simple Steps to Get Started
        </h1>
        <section className=" sm:flex  justify-evenly ">
          <div className="ssm:w-[55%] p-1">
            {Cards.map((data, i) => (
              <MainCard key={i} data={data} />
            ))}
          </div>
          <div>
            <img
              src="/CarsGroup.png"
              alt=""
              className="ml-3  hidden sm:block"
            />
          </div>
        </section>
        <section className=" mt-[5vh] sm:flex min-h-[35vh]">
          <div className=" sm:w-[50%] w-full hidden sm:block min-h-full   ">
            <span className="bg-slate-200 border-green-300 border-r-0 border-t-0 border-b-0  border-l-4 p-2 mt-[5vh] m-2 ">
              What our Partner says
            </span>
            <h1 className="sm:text-[30px] text-[25px]  font-bold m-2">
              Testimonials
            </h1>
            <p className=" sm:text-[17px]  hidden sm:block">{`At MyFastX, our commitment to excellence is reflected in the feedback from our valued customers. Here's what they have to say about their experiences with our quick and reliable delivery and logistics services`}</p>
            <div className="flex mt-[10vh]   items-end">
              <img src="/First.png" alt="" />
              <img src="/Second.png" alt="" />
            </div>
          </div>
          <div className="sm:w-[50%] bg-[#F2FAF5]  p-10  ">
            <div className="flex  items-center gap-x-5">
              <img src="/person.png" alt="" />
              <main>
                <h2>James Darwin</h2>
                <p>Kolkata,West Bengal</p>
              </main>
            </div>
            <div className="mt-5">
              <p>{`“ Joining MyFastX has been a game-changer for me. The flexible hours and reliable income have made my life so much easier. “`}</p>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </section>
        <img src="/Line.png" alt="" className=" w-[100vw]  hidden sm:block" />
        <div className="flex">
          <section className="  sm:block hidden w-[48%] border border-r-4 border-l-0 border-t-0 border-b-0 min-h-[60vh] ">
            <span className="bg-slate-200 border-green-300 border-r-0 border-t-0 border-b-0  border-l-4 p-2 mt-[5vh] m-2 ">
              What our Partner says
            </span>
            <h1 className="sm:text-[30px] text-[25px]  font-bold mt-5">
              Ready to Get Started?
            </h1>
            <p className="p-3">{`Don't miss out on this incredible opportunity to be part of a leading delivery and logistics platform. Sign up now for just Rs.999 and start driving your way to success with MyFastX!`}</p>
            <Button btnText={"Register now "} />

            <p className="text-slate-400">{`For more information, Contact us at:`}</p>
            <section>
              <Phone />
              <Email />
            </section>
          </section>
          <section className="p-3  sm:w-[50%] ">
            <span className="bg-slate-200 border-green-300 border-r-0 border-t-0 border-b-0  border-l-4 p-2 mt-[5vh] m-2 ">
              Frequently Asked Questions
            </span>
            <h1 className="sm:text-[25px] text-[25px]  font-bold mt-5 w-full ">
              {`Got Questions? We’ve Got Answers!`}
            </h1>
            <div className=" border border-slate-400 rounded-lg">
              {TestimonialText.map((data, i) => (
                <TestiMonialCard key={i} data={data} />
              ))}
            </div>
          </section>
        </div>
        <div className=" bg-[#F2FAF5] p-4  sm:min-h-[50vh]  flex-col justify-center items-center sm:flex hidden">
          <p className=" text-[15px] text-green-300">
            Drive Your Success with MyFastX
          </p>
          <h1 className=" font-semibold text-[25px]">
            Join Us as a Partner Driver
          </h1>
          <span className=" sm:w-[50%] sm:text-[14px] text-center">
            Are you a vehicle owner looking for new opportunities? Join MyFastX
            today and become part of a dynamic network of drivers. With us,
            you’ll enjoy flexible work hours, competitive earnings, and the
            satisfaction of delivering smiles across the city.
          </span>
          <Button btnText={"Register now for just Rs. 999!"} />
        </div>
        <div className="sm:hidden mt-[5vh]">
          <span className="bg-slate-200 border-green-300 border-r-0 border-t-0 border-b-0  border-l-4 p-2  m-2 ">
            Frequently asked Questions
          </span>
          <h1 className="sm:text-[30px] text-[25px]  font-bold mt-5 p-2">
            {`Got Questions? We’ve Got Answers`}
          </h1>

          <p className="p-2">
            {`Don't miss out on this incredible opportunity to be part of a leading delivery and logistics platform. Sign up now for just Rs.999 and start driving your way to success with MyFastX!`}
          </p>
          <Button btnText={"Register now "} />
          <div className=" h-[30vh] bg-[#F2FAF5]  flex  flex-col justify-center items-center p-3 mt-[5vh]  ">
            <h2 className="text-gray-500">For More Information</h2>
            <h1 className="text-green-300 font-semibold  text-[20px]">
              Contact us
            </h1>
            <div className="flex  text-nowrap  justify-around">
              <div className=" bg-white p-1 mt-[2vh] ">
                <Phone />
              </div>
              <div className=" bg-white p-1  ml-[8px] rounded-md rounded-r-none">
                <Email />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;

const Phone = () => {
  return (
    <div className=" flex sm:gap-x-5 gap-x-1  items-center m-3">
      <p className=" sm:w-[40px]  sm:h-[40px] h-[30px] w-[30px] bg-green-400 rounded-full flex justify-center  items-center">
        <FaPhoneAlt className="text-white" />
      </p>
      <span className="text-[12px] sm:text-[17px]">+91-XXXXX XXXXX</span>
    </div>
  );
};
const Email = () => {
  return (
    <div className=" flex sm:gap-x-5  gap-x-1  items-center m-3">
      <p className=" sm:w-[40px]  sm:h-[40px] h-[30px] w-[30px] bg-green-400 rounded-full flex justify-center  items-center">
        <MdEmail className="text-white" />
      </p>
      <span className="text-[12px] sm:text-[17px]">support@myfastx.com</span>
    </div>
  );
};
