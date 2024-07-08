import { Link } from "react-router-dom";
import "./homePageEvent.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomePageEvent = () => {
    // Custome Arrow React Slick
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={style} onClick={onClick}>
                <i className="fa-solid fa-angle-left"></i>
            </div>
        );
    };
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={style} onClick={onClick}>
                <i className="fa-solid fa-angle-right"></i>
            </div>
        );
    };

    // Setting Slick Carousel For Movie Pagination HomePage
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="hEvent__container">
            <div className="hEvent__header">
                <h2 className="text-white text-5xl font-bold leading-10">
                    EVENTS
                </h2>
                <Link className="hMovie__viewAll text-[#31d7a9] font-bold text-2xl">
                    View All
                </Link>
            </div>
            {/* HomePage Event List */}
            <div className="hEvent__item ">
                <Slider {...settings}>
                    <div className="text-white hEvent__item__contain">
                        <div className="relative">
                            <div className="hEvent__img">
                                <img
                                    className="h-[350px] w-full object-cover"
                                    src="./img/event03.jpg"
                                    alt="img"
                                />
                            </div>
                            <div className="event__date text-center">
                                <h6 className="date__title text-2xl font-bold">
                                    28
                                </h6>
                                <span className="font-semibold text-xl">
                                    Dec
                                </span>
                            </div>
                        </div>
                        <div className="hEvent__content">
                            <div className="hEContent__title text-2xl">
                                Event 1
                            </div>
                            <div className="hEContent__address">
                                327 Montague Street
                            </div>
                        </div>
                    </div>
                    <div className="text-white hEvent__item__contain">
                        <div className="relative">
                            <div className="hEvent__img">
                                <img
                                    className="h-[350px] w-full object-cover"
                                    src="./img/event02.jpg"
                                    alt="img"
                                />
                            </div>
                            <div className="event__date text-center">
                                <h6 className="date__title text-2xl font-bold">
                                    28
                                </h6>
                                <span className="font-semibold text-xl">
                                    Dec
                                </span>
                            </div>
                        </div>
                        <div className="hEvent__content">
                            <div className="hEContent__title text-2xl">
                                Event 1
                            </div>
                            <div className="hEContent__address">
                                327 Montague Street
                            </div>
                        </div>
                    </div>
                    <div className="text-white hEvent__item__contain">
                        <div className="relative">
                            <div className="hEvent__img">
                                <img
                                    className="h-[350px] w-full object-cover"
                                    src="./img/event01.jpg"
                                    alt="img"
                                />
                            </div>
                            <div className="event__date text-center">
                                <h6 className="date__title text-2xl font-bold">
                                    28
                                </h6>
                                <span className="font-semibold text-xl">
                                    Dec
                                </span>
                            </div>
                        </div>
                        <div className="hEvent__content">
                            <div className="hEContent__title text-2xl">
                                Event 1
                            </div>
                            <div className="hEContent__address">
                                327 Montague Street
                            </div>
                        </div>
                    </div>
                    <div className="text-white hEvent__item__contain">
                        <div className="relative">
                            <div className="hEvent__img">
                                <img
                                    className="h-[350px] w-full object-cover"
                                    src="./img/event03.jpg"
                                    alt="img"
                                />
                            </div>
                            <div className="event__date text-center">
                                <h6 className="date__title text-2xl font-bold">
                                    28
                                </h6>
                                <span className="font-semibold text-xl">
                                    Dec
                                </span>
                            </div>
                        </div>
                        <div className="hEvent__content">
                            <div className="hEContent__title text-2xl">
                                Event 1
                            </div>
                            <div className="hEContent__address">
                                327 Montague Street
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default HomePageEvent;
