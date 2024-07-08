import { useSelector } from "react-redux";
import "./userProfile.scss";
const UserProfile = () => {
    const { users } = useSelector((state) => state.users);
    console.log(users);
    return (
        <div className="userProfile__container">
            <div className="userProfile__banner">
                <div className="user__banner__item">
                    <div className="userBanner__title">Profile</div>
                    <hr className="mt-0 mb-4" />
                </div>
            </div>
            <div className="profile__content flex py-40">
                <div className="img mr-10">
                    <img
                        src="https://images.unsplash.com/photo-1523307730650-594bc63f9d67?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="img"
                        className="w-full h-[550px] object-contain"
                    />
                </div>
                <div className="profile__data text-white text-3xl leading-[5rem] ml-16">
                    <p>Name: {users?.hoTen}</p>
                    <p>UserName: {users?.taiKhoan}</p>
                    <p>Email: {users?.email}</p>
                    <p>Phone: {users?.soDT}</p>
                    <p>Type: {users?.maLoaiNguoiDung}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
