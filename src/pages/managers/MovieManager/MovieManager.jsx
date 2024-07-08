import React, { useContext, useEffect, useState } from "react";
import { quanLyPhim } from "../../../api/movie.api";
import { Table } from "antd";
import { render } from "react-dom";
import { AlertMessage } from "../../../App";
import { upDateUser } from "../../../redux/slices/manage.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import paths from "../../../paths";

const MovieManager = () => {
  const { handleAlert } = useContext(AlertMessage);
  const [arrMovie, setArrMovie] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const fetchData = async () => {
  //   try {
  //     const moviesData = await getMoviesApi();
  //     setArrMovie(moviesData);
  //     console.log(moviesData);
  //     console.log(arrMovie);
  //   } catch (error) {
  //     console.error("Error fetching movies:", error);
  //   }
  // };
  useEffect(() => {
    // setArrMovie(getMoviesApi());
    fetchData();
    // để console.log ở đây
    console.log(arrMovie);
  }, [arrMovie]);

  const fetchData = () => {
    quanLyPhim
      .layDanhSachPhim()
      .then((res) => {
        console.log(res);
        setArrMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      width: 100,
    },

    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      width: 100,
      heigt: 50,
      align: "center",
      render: (text) => {
        console.log(text);
        return <img className="" src={text} alt="" />;
      },
    },

    {
      title: "Tên Phim",
      width: 300,
      dataIndex: "tenPhim",
      return: (text) => {
        return <p className="flex py-10">{text}</p>;
      },
    },

    {
      title: "Đánh giá",
      dataIndex: "danhGia",
      render: (text) => {
        return (
          <span className="font-bold">
            <i className="fa-solid fa-star mr-1"></i>
            {text}
          </span>
        );
      },
    },
    {
      title: "Đang chiếu",
      dataIndex: "dangChieu",
      render: (text) => {
        return text == true ? (
          <span className="text-green-500">True</span>
        ) : (
          <span className="text-red-500">False</span>
        );
      },
    },

    {
      title: "Sắp Chiếu",
      dataIndex: "sapChieu",
      render: (text) => {
        return text == true ? (
          <span className="text-green-500">True</span>
        ) : (
          <span className="text-red-500">False</span>
        );
      },
    },

    {
      title: "Hot",
      dataIndex: "hot",
      render: (text) => {
        return text == true ? (
          <span className="text-green-500">True</span>
        ) : (
          <span className="text-red-500">False</span>
        );
      },
    },
    {
      title: "Chức năng",
      render: (text, record, index) => {
        return (
          <div className="flex justify-center">
            <button
              onClick={() => {
                // console.log(record);
                dispatch(upDateUser(record));
                navigate(`${paths.ADMIN}/create`);
              }}
              className="mx-2"
            >
              <i className="fa-light fa-pen-to-square text-blue-500 font-bold"></i>
            </button>
            <button
              onClick={() => {
                quanLyPhim
                  .xoaPhim(text.maPhim)
                  .then((res) => {
                    console.log(res);
                    fetchData();
                    handleAlert("success", res.data.content);
                  })
                  .catch((err) => {
                    console.log(err);
                    handleAlert("error", err.response.data.content);
                  });
              }}
            >
              <i className="fa-light fa-trash text-red-500 font-bold"></i>
            </button>
          </div>
        );
      },
    },
  ];
  // const handleGetMovie = () = {
  //     getMoviesApi.
  // }
  return (
    <>
      {/* {console.log(arrMovie)} : dòng console log k bỏ trong component dc nhé, phải bỏ bên ngoài return */}
      {arrMovie && (
        <Table
          bordered={true}
          className=""
          columns={columns}
          dataSource={arrMovie}
          pagination={{
            defaultPageSize: 20,
          }}
        />
      )}
    </>
  );
};

export default MovieManager;
