import "./banner.scss";

const Banner = () => {
    return (
        <div className="banner__container">
            <div className="banner__bg"></div>
            <div className="banner__content">
                <h1>
                    <span>BOOK YOUR </span>
                    <br />
                    TICKETS FOR
                    <span className="text-[#31D7A9]"> MOVIE</span>
                </h1>
                <p className="text-2xl text-gray-300">
                    Safe, secure, reliable ticketing.Your ticket to live
                    entertainment!
                </p>
            </div>
        </div>
    );
};

export default Banner;
