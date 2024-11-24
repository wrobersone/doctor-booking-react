import Banner from "../components/banner/Banner";
import FeaturedDoctors from "../components/doctors/FeaturedDoctors";
import Header from "../components/header/Header";
import Speciality from "../components/menu/Speciality";
const Home = () => {
  return (
    <div>
      <Header />
      <Speciality />
      <FeaturedDoctors />
      <Banner />
    </div>
  );
};

export default Home;
