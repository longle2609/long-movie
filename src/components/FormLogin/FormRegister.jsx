import React, { useContext } from "react";
import InputForm from "../Input/InputForm";
import { useFormik } from "formik";
import ButtonForm from "../Button/ButtonForm";
import paths from "../../paths";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { userApiService } from "../../api/user.api";
import { GROUP_CODE } from "../../constants";
import { AlertMessage } from "../../App";

const FormRegister = ({ handleAlert }) => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        maNhom: GROUP_CODE,
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        hoTen: "",
      },
      onSubmit: (values) => {
        // console.log(values);
        userApiService
          .signUp(values)
          .then((res) => {
            console.log(res);
            navigate(paths.LOGIN);
            handleAlert("success", "Đăng Ký Thành Công");
          })
          .catch((err) => {
            console.log(err);
            handleAlert("error", "Đăng Ký Thất Bại");
          });
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string()
          .required("Vui lòng không bỏ trống")
          .matches(/([a-zA-Z0-9_\s]+)/, "Tài khoản không hợp lệ"),
        matKhau: Yup.string()
          .required("Vui lòng không bỏ trống")
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
            "Mật khẩu không hợp lệ"
          ),
        email: Yup.string().required("Vui lòng không bỏ trống"),
        soDt: Yup.string()
          .required("Vui lòng không bỏ trống")
          .matches(
            /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
            "Số điện thoại không hợp lệ"
          ),
        hoTen: Yup.string().required("Vui lòng không bỏ trống"),
      }),
    });
  return (
    <div>
      <form
        className="grid grid-cols-2 gap-2"
        onSubmit={handleSubmit}
        action=""
      >
        <InputForm
          name="hoTen"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.hoTen}
          value={values.hoTen}
          errors={errors.hoTen}
          placeholder="Name"
          icon="fa-thin fa-pen text-black font-bold"
        />

        <InputForm
          name="taiKhoan"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.taiKhoan}
          value={values.taiKhoan}
          errors={errors.taiKhoan}
          placeholder="Tài Khoản"
          icon="fa-thin fa-user text-black font-bold"
        />

        <InputForm
          name="email"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.email}
          value={values.email}
          errors={errors.email}
          placeholder="Email"
          icon="fa-thin fa-envelope text-black font-bold"
        />

        <InputForm
          name="soDt"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.soDt}
          value={values.soDt}
          errors={errors.soDt}
          placeholder="Phone"
          icon="fa-thin fa-phone text-black font-bold"
        />

        <InputForm
          className=""
          name="matKhau"
          type="password"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.matKhau}
          value={values.matKhau}
          errors={errors.matKhau}
          placeholder="Password"
          icon="fa-thin fa-lock text-black font-bold"
        />

        <div className="my-5 col-span-2">
          <ButtonForm />
        </div>
      </form>

      {/* Recommend Sign Up */}
      <p className="py-2 text-xs">
        Already have an account?
        <Link to={paths.LOGIN} className="underline text-blue-500 text-sm">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default FormRegister;
