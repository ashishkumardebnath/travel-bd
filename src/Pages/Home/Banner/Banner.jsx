const Banner = () => {
  return (
    <div className=" lg:flex justify-between">
      <div className=" lg:mt-40 mt-20">
        <h2 className="text-[#DF6951] text-xl font-semibold">
          Best Destinations around the world
        </h2>
        <h6 className="lg:text-6xl text-3xl font-bold mt-3">
          Travel, enjoy <br /> and live a new <br /> and full life
        </h6>
        <p className="my-6">
          Built Wicket longer admire do barton vanity itself do in it. <br />{" "}
          Preferred to sportsmen it engrossed listening. Park gate <br />
          sell they west hard for the.
        </p>
        <div className="flex">
          <button className="bg-[#F1A501] text-white p-2 rounded-md me-3">
            Find out more
          </button>

          <button className="bg-[#F1A501] text-white p-2 rounded-md">
            Find out more
          </button>
        </div>
      </div>

      <div className="lg:mt-0 mt-6">
        <img
          className="lg:w-[620px] lg:h-[620px]  lg:mt-20 mt-6 absolute"
          src="https://i.ibb.co/cYdcRh8/Image.png"
          alt=""
        />
        <img className="" src="https://i.ibb.co/V2t5Dpx/Decore.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
