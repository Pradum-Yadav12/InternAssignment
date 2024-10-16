import logo from "./../assets/Frame.png";

export const Footer = () => {
  return (
    <footer className="py-12 bg-gray-500 xl:pt-24 dark:bg-gray-800">
      <img src={logo} alt="" />
      <div className="  sm:grid sm:grid-cols-3    p-2 grid-col-1  ">
        <div className=" text-white sm:col-span-1 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
          pariatur omnis commodi labore minus voluptatem nisi. Adipisci
          explicabo non pariatur error, excepturi tempore mollitia recusandae,
          iusto ducimus sequi blanditiis praesentium!
        </div>
        <section className="sm:col-span-2 flex sm:grid  sm:grid-cols-3 grid-col-2 justify-between mt-4 sm:mt-0">
          <div className="mb-6 text-sm font-semibold text-gray-400  dark:text-white">
            <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              Compnay
            </h3>
            <ul>
              <li className="mb-4">About us</li>
              <li className="mb-4">What We Do?</li>
              <li className="mb-4">investors</li>
              <li className="mb-4">Press Realese</li>
              <li className="mb-4">Carrers</li>
              <li className="mb-4">Pricing Details</li>
            </ul>
          </div>
          <div className="mb-6 text-sm font-semibold text-gray-400  dark:text-white">
            <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              Compnay
            </h3>
            <ul>
              <li className="mb-4">About us</li>
              <li className="mb-4">What We Do?</li>
              <li className="mb-4">investors</li>
              <li className="mb-4">Press Realese</li>
              <li className="mb-4">Carrers</li>
              <li className="mb-4">Pricing Details</li>
            </ul>
          </div>
          <div className="mb-6 text-sm font-semibold text-gray-400  dark:text-white">
            <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              Compnay
            </h3>
            <ul>
              <li className="mb-4">About us</li>
              <li className="mb-4">What We Do?</li>
              <li className="mb-4">investors</li>
              <li className="mb-4">Press Realese</li>
              <li className="mb-4">Carrers</li>
              <li className="mb-4">Pricing Details</li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};
