import ShowTimeSystem from "../ShowTimeSystem/ShowTimeSystem";
import "./theater.scss";
const Theater = () => {
    return (
        <div className="theater__container">
            <div className="theater__banner">
                <div className="theater__bg"></div>
                <div className="tBanner__content">
                    <h1>
                        <span className="text-white">ABOUT</span>
                        <span className="text-[#31D7A9]"> THEATER</span>
                    </h1>
                    <p className="text-2xl text-gray-300">
                        View all information about movie theaters and the
                        showtime
                    </p>
                </div>
            </div>
            <div className="theater__system container mx-auto ">
                <ShowTimeSystem />
            </div>
        </div>
    );
};

export default Theater;
