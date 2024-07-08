import { NavLink } from "react-router-dom";
import "./dropDownProfile.scss";
import { useDispatch } from "react-redux";
import { handleLogOut } from "../../redux/slices/user.slice";
const DropDownProfile = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <ul className="flex flex-col gap-4 dropDown__profile">
                <NavLink to={"user-profile"}>Profile</NavLink>
                <NavLink>Setting</NavLink>
                <NavLink
                    onClick={() => {
                        dispatch(handleLogOut());
                    }}
                >
                    Logout
                </NavLink>
            </ul>
        </div>
    );
};

export default DropDownProfile;
