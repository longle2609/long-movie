import { useEffect } from "react";
import { getMoviesApi } from "../../api/movie.api";
import Banner from "../../components/Banner/Banner";
import HomePageSearch from "../../components/HomePageSearch/HomePageSearch";
import HomePageMovie from "../../components/HomePageMovie/HomePageMovie";
import "./home.scss";
import HomePageEvent from "../../components/HomePageEvent/HomePageEvent";

const Home = () => {
  useEffect(() => {
    getMoviesApi()
      .then((result) => {
        console.log("result: ", result);
      })
      .catch((err) => console.log("error: ", err));
  }, []);

    return (
        <div className="home">
            <Banner />
            <HomePageSearch />
            <HomePageMovie />
            <HomePageEvent />
        </div>
    );
};

export default Home;
