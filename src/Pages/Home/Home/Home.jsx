import Banner from "../Banner/Banner";
import BookStep from "../BookStep/BookStep";
import Category from "../Category/Category";
import Destinations from "../Destinations/Destinations";
import Review from "../Review/Review";
import SimpleDiv from "../SimpleDiv/SimpleDiv";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <Destinations></Destinations>
      <BookStep></BookStep>
      <Review></Review>
      <SimpleDiv></SimpleDiv>
    </>
  );
};

export default Home;
