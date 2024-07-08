import "./header.scss";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import paths from "../../paths";
import { useState } from "react";
import { useSelector } from "react-redux";
import DropDownProfile from "../DropDownProfile/DropDownProfile";
const Header = () => {
    const [openProfile, setOpenProfile] = useState(false);
    const { users } = useSelector((state) => state.users);
    // console.log(users);

    // Scroll down Header sẽ đổi từ màu transparent thành màu xanh
    const [navbar, setNavBar] = useState(false);
    const changeBackGround = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 80) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };
    window.addEventListener("scroll", changeBackGround);

    // Check Trang hiển thị đang ở trang nào trên navabar => Nếu đang ở trang nào chữ đó sẽ màu vàng
    const checkActive = ({ isActive }) => {
        // console.log(isActive);
        let className = "font-semibold";
        return `${className} ${isActive ? "text-yellow-300" : "text-white"}`;
    };

    /** Mở thanh menu khi ở chế độ tablet và mobile
     * - true: đang mở
     * - false: không mở
     * */
    let [open, setOpen] = useState(false);

    /**Mở login và register ở chế độ máy nhỏ */
    let [openLR, setOpenLR] = useState(false);
    return (
        <header className={navbar ? "header header__active" : "header"}>
            <div className="header__container">
                <nav className="border-gray-200 px-4 lg:px-6 py-2.5 ">
                    <span
                        className="check__btn"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        {open ? (
                            <i className="fa-solid fa-xmark"></i>
                        ) : (
                            <i className="fa-solid fa-bars"></i>
                        )}
                    </span>
                    <span
                        className="check__logRes"
                        onClick={() => {
                            setOpenLR(!openLR);
                        }}
                    >
                        {openLR ? (
                            <i className="fa-solid fa-xmark"></i>
                        ) : (
                            <i className="fa-regular fa-circle-user"></i>
                        )}
                    </span>
                    <div className="header__logo flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <NavLink to={paths.HOME} className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 sm:h-9 w-full h-full"
                                alt="Logo"
                            />
                        </NavLink>
                        {users ? (
                            <>
                                {" "}
                                <div className="relative">
                                    <div
                                        className="text-2xl font-bold text-white cursor-pointer"
                                        onClick={() => {
                                            setOpenProfile(!openProfile);
                                        }}
                                    >
                                        <span>Hello, </span>
                                        <i className="fa-regular fa-circle-user ml-3 mr-2"></i>
                                        {users.taiKhoan}
                                    </div>
                                    {openProfile && <DropDownProfile />}
                                </div>
                            </>
                        ) : (
                            <>
                                {" "}
                                <div
                                    className={`${
                                        openLR
                                            ? "header__log__res open__logRes"
                                            : "header__log__res "
                                    } flex items-center lg:order-2`}
                                >
                                    <NavLink
                                        to={paths.LOGIN}
                                        className="headerlg__item flex items-center"
                                    >
                                        <i className="fa-solid fa-circle-user text-3xl text-gray-300 mr-3"></i>
                                        {/* <i className="fa-regular fa-circle-user text-3xl text-gray-300 mr-3"></i> */}
                                        Log in
                                    </NavLink>
                                    <span className="text-gray-300 text-2xl mx-5">
                                        I
                                    </span>

                                    <NavLink
                                        to={paths.REGISTER}
                                        className="headerlg__item flex items-center"
                                    >
                                        <i className="fa-regular fa-circle-user text-3xl text-gray-300 mr-3"></i>
                                        Register
                                    </NavLink>
                                </div>
                            </>
                        )}

                        <div
                            className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul
                                className={`flex space-x-8 font-medium flex-row  ${
                                    open
                                        ? "header__menu open__menu"
                                        : "header__menu"
                                }`}
                            >
                                <li>
                                    <NavLink
                                        to="/"
                                        className={checkActive}
                                        aria-current="page"
                                    >
                                        HOME
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={paths.LIST_MOVIES}
                                        className={checkActive}
                                    >
                                        MOVIES
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={paths.THEATER}
                                        className={checkActive}
                                    >
                                        THEATER
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={paths.EVENT}
                                        className={checkActive}
                                    >
                                        EVENT
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={paths.CONTACT}
                                        className={checkActive}
                                    >
                                        CONTACT
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
