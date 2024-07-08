import { useEffect, useState } from "react";
import "./homePageSearch.scss";
import { Movie } from "../../api/movie.api";
import { NavLink } from "react-router-dom";
import paths from "../../paths";
const HomePageSearch = () => {
    const [movieList, setMovieList] = useState([]);
    // console.log(movieList);
    const [maFilm, setMaFilm] = useState("");
    // console.log(maFilm);
    useEffect(() => {
        Movie.getMovieApi()
            .then((res) => {
                console.log(res);
                setMovieList(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // const onStateChange = (event) => {
    //     Movie.getShowTimeMovie(event)
    //         .then((res) => {
    //             // console.log(res.data.content.heThongRapChieu);
    //             setTheater(res.data.content.heThongRapChieu);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    // Hàm lấy mã phim khi Chọn movie Search
    const getMaPhim = (event) => {
        // console.log(event);
        setMaFilm(event);
    };
    return (
        <div className="home__search">
            <div className="hsearch__container">
                <div className="hsearch__header">
                    <div className="hsearch__first uppercase">
                        <h6 className="hsearch__category text-xl mb-2">
                            Welcome to Boleto
                        </h6>
                        <h3 className="hsearch__title text-white text-3xl">
                            What are you looking for
                        </h3>
                    </div>
                    <div className="hsearch__second uppercase mb-5">
                        <button>
                            <i className="fa-solid fa-film"></i>
                            <span className="font-bold pl-3 text-white">
                                MOVIE
                            </span>
                        </button>
                        <button>
                            <i className="fa-solid fa-calendar-days"></i>
                            <span className="font-bold pl-3 text-white">
                                EVENT
                            </span>
                        </button>
                        <button>
                            <i className="fa-solid fa-masks-theater"></i>
                            <span className="font-bold pl-3 text-white">
                                THEATER
                            </span>
                        </button>
                    </div>
                </div>
                {/* Header Search */}
                <div className="hsearch__bar">
                    <div className="hsearchBar__item">
                        <form className="hsearchBar__form">
                            <div className="form__search">
                                <div className="form__group">
                                    <i className="fa-solid fa-clapperboard icon__search"></i>
                                    <span>Movie</span>
                                    <select
                                        name="movie"
                                        onChange={(event) => {
                                            getMaPhim(event.target.value);
                                        }}
                                    >
                                        <option value="film">Film</option>
                                        {movieList.map((item, index) => {
                                            return (
                                                <option
                                                    className="text-black w-28"
                                                    value={item.maPhim}
                                                    key={index}
                                                >
                                                    {item.tenPhim}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="form__submit">
                                <NavLink to={`${paths.MOVIE_DETAIL}/${maFilm}`}>
                                    <button
                                        type="button"
                                        className="btn__submit px-10 py-4 rounded-md bg-blue-500 text-white text-lg"
                                        // onClick={() => {
                                        //     console.log(maFilm);
                                        // }}
                                    >
                                        Search Film
                                    </button>
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageSearch;
