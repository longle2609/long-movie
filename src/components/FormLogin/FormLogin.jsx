import React from "react";
import InputForm from "../Input/InputForm";
import ButtonForm from "../Button/ButtonForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userApiService } from "../../api/user.api";
import { setLocalStorage } from "../../helpers";
import { Link, useNavigate } from "react-router-dom";
import paths from "../../paths";
import { handleGetValue } from "../../redux/slices/user.slice";
import { useDispatch } from "react-redux";

const FormLogin = ({ handleAlert }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
      },
      onSubmit: (values) => {
        // console.log(values);
        userApiService
          .signIn(values)
          .then((res) => {
            console.log(res);
            setLocalStorage("user", res.data.content);
            dispatch(handleGetValue(res.data.content));
            handleAlert("success", "Đăng Nhập Thành Công");
            navigate(paths.HOME);
          })
          .catch((err) => {
            handleAlert("error", "Đăng Nhập Thất Bại");
            console.log(err);
          });
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required("Vui lòng không để trống"),
        matKhau: Yup.string()
          .required("Vui lòng không để trống")
          // .matches(
          //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
          //   "Vui lòng nhập đúng định dạng mật khẩu"
          // ),
      }),
    });
  console.log(errors.taiKhoan);
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <InputForm
          name="taiKhoan"
          handleChange={handleChange}
          handleBlur={handleBlur}
          icon="fa-thin fa-user text-black font-bold"
          placeholder="Tài Khoản"
          errors={errors.taiKhoan}
          touched={touched.taiKhoan}
          value={values.taiKhoan}
        />

        <InputForm
          name="matKhau"
          handleChange={handleChange}
          handleBlur={handleBlur}
          icon="fa-thin fa-lock text-black font-bold"
          type="password"
          placeholder="Password"
          errors={errors.matKhau}
          touched={touched.matKhau}
          value={values.matKhau}
        />

        <div className="login-other flex justify-between py-3">
          <div className="flex">
            <input id="remember" className="inline-block" type="checkbox" />
            <label className="font-bold text-sm ml-1" htmlFor="remember">
              Remember
            </label>
          </div>

          <a className="underline text-sm text-blue-500">Forget Password</a>
        </div>
        <ButtonForm />
        {/* Recommend Sign Up */}
        <p className="py-2 text-xs">
          Already have an account?
          <Link
            to={paths.REGISTER}
            className="underline text-blue-500 text-sm"
            href="#"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default FormLogin;
