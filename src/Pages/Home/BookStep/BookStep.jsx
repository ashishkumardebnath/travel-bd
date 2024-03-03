import img1 from "../../../assets/banner/image1.png";
import img2 from "../../../assets/banner/Group 12 (1).png";
import img3 from "../../../assets/banner/Group 11.png";
import img4 from "../../../assets/banner/Image (1).png";

const BookStep = () => {
  return (
    <div className="mt-28 lg:flex justify-between">
      <div>
        <p className="mb-4 font-bold">Easy and Fast</p>
        <h3 className="lg:text-4xl text-3xl font-bold">
          Book your next trip <br /> in 3 easy steps
        </h3>
        <div className="flex gap-2 mt-10">
          <img className="w-16" src={img1} alt="" />
          <div>
            <p className="font-bold">Choose Destination</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Urna, tortor tempus.{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-2 my-10">
          <img className="w-16" src={img2} alt="" />
          <div>
            <p className="font-bold">Make Payment</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Urna, tortor tempus.{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <img className="w-16" src={img3} alt="" />
          <div>
            <p className="font-bold">Choose Destination</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Urna, tortor tempus.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:-mt-40">
        <img src={img4} alt="" />
      </div>
    </div>
  );
};

export default BookStep;
