import img1 from "../../../assets/banner/logos.png";
import img2 from "../../../assets/banner/subscribe section.png";

const SimpleDiv = () => {
  return (
    <div>
      {" "}
      <img className="w-full" src={img1} alt="" />
      <img className="w-full" src={img2} alt="" />
    </div>
  );
};

export default SimpleDiv;
