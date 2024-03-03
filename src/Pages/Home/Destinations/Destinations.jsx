import { useState } from "react";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  fetch("destinations.json")
    .then((res) => res.json())
    .then((data) => setDestinations(data));
  return (
    <div className="mt-20">
      <p className="font-semibold text-center">Top Selling</p>
      <h3 className="text-3xl font-bold text-center">Top Destinations</h3>
      <div className="grid lg:grid-cols-3 gap-5 mt-10">
        {destinations.map((destination) => (
          <div key={destination.id}>
            <div className=" shadow-xl rounded-xl pb-6">
              <div className="flex justify-center items-center">
                <img src={destination.image} alt="" />
              </div>
              <div className="flex justify-around font-semibold mt-3">
                <p>{destination.location}</p>
                <p>${destination.amount}</p>
              </div>
              <div className="flex gap-2 lg:ms-16 ms-12 mt-3">
                <img className="" src={destination.logo} alt="" />
                <p className="font-semibold">{destination.timing}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
