// import React from 'react'
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Banner from "./components/Banner";
import Evaluation from "./components/Evaluation";
import { getMovieDetailApi } from "../../api/movie.api";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import Ticket from "./components/Ticket";
import { createPortal } from "react-dom";
import Booking from "../booking/Booking";

const INIT_MOVIE = {
  biDanh: "",
  dangChieu: false,
  danhGia: 0,
  hinhAnh: "",
  hot: false,
  maPhim: "",
  moTa: "",
  ngayKhoiChieu: "",
  sapChieu: false,
  tenPhim: "",
  trailer: "",
};

export const TrailerContext = createContext("");

const Movie = () => {
  let { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(INIT_MOVIE);
  const [openModal, setOpenModal] = useState(false);
  const [maLichChieu, setMaLichChieu] = useState("");
  console.log(maLichChieu);

  const handleBookingModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  const formatMovieDate = useMemo(() => {
    if (!movieDetail.ngayKhoiChieu) {
      return;
    }
    const date = new Date(movieDetail.ngayKhoiChieu);
    return format(date, "dd-MM-yyyy");
  }, [movieDetail.ngayKhoiChieu]);

  const getTrailerCode = useMemo(() => {
    if (!movieDetail.trailer) {
      return;
    }
    const query = movieDetail.trailer.replace(
      "https://www.youtube.com/watch",
      ""
    );
    const searchParams = new URLSearchParams(query);

    return searchParams.get("v");
  }, [movieDetail.trailer]);

  const getMovieDetail = useCallback(async () => {
    if (!movieId) {
      return;
    }
    const res = await getMovieDetailApi(movieId);
    setMovieDetail(res);
  }, [movieId]);

  const handleClickScroll = useCallback(() => {
    const element = document.getElementById("datVe");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    getMovieDetail();
  }, [getMovieDetail, movieId]);

  return (
    <div id="movie-main">
      <TrailerContext.Provider value={getTrailerCode}>
        <Banner pics={movieDetail.hinhAnh} />
      </TrailerContext.Provider>

      <div className="bg-[#001232] py-5">
        <div className="lg:relative">
          <div className="container-me relative">
            <div className="px-[10px] flex gap-3 pb-[10px]">
              <div
                className={`w-full grow basis-0 rounded-md overflow-hidden border-2 border-solid border-[#17305f] relative z-10 bg-cover bg-center md:min-h-[300px] lg:min-h-[460px]`}
                style={{ backgroundImage: `url('${movieDetail.hinhAnh}')` }}
              >
                {/* <img src={MovieImg} alt="" /> */}
              </div>
              <div className="grow-[2] basis-0">
                <div className="flex justify-between items-center">
                  <div className="my-3 font-semibold text-white text-[20px] max-w-[200px] md:my-5 sm:max-w-[unset] sm:text-[25px] pr-[40px] md:pr-0 leading-[150%]">
                    {movieDetail.tenPhim.toUpperCase()}
                  </div>
                  {movieDetail.hot && (
                    <span className="bg-[#f58020] p-3 rounded-md font-bold text-red-700">
                      HOT
                    </span>
                  )}
                </div>
                <div className="flex gap-5 flex-col text-[#f58020] text-[16px] sm:text-[20px] sm:gap-10">
                  <div className="flex gap-5 items-center">
                    <div className="w-[25px] h-[25px] text-center leading-[25px]">
                      <i className="fa-regular fa-clock"></i>
                    </div>
                    <p className="text-white">120 phút</p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="w-[25px] h-[25px] text-center leading-[25px]">
                      <i className="fa-regular fa-calendar"></i>
                    </div>

                    <p className="text-white">{formatMovieDate}</p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="w-[25px] h-[25px] text-center leading-[25px]">
                      <i className="fa-solid fa-star"></i>
                    </div>

                    <p className="text-white">{movieDetail.danhGia}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[10px] mb-3 leading-[24px]">
              <span className="text-[#31d7a9] me-2">Nhà sản xuất: </span>
              <span className="text-white">CYBERSOFT</span>
            </div>
          </div>
          <div className="bg-[#032055] overflow-hidden border-2 border-solid border-[#17305f] lg:absolute w-full lg:bottom-0 lg:translate-y-[-65px]">
            <Evaluation handleClickScroll={handleClickScroll} />
          </div>
        </div>

        <div className="container-me mb-5">
          <div className="px-[10px]">
            <p className="text-[#31d7a9] pt-5 pb-3">Nội dung phim</p>
            <p className="text-white leading-5 text-[14px] font-thin">
              {movieDetail.moTa}
            </p>
          </div>
        </div>

        <div className="bg-[#001232]" id="datVe">
          <Ticket
            movieId={movieId}
            handleBookingModal={handleBookingModal}
            setMaLichChieu={setMaLichChieu}
          />
        </div>
      </div>
      {maLichChieu &&
        openModal &&
        createPortal(
          <Booking
            handleBookingModal={handleBookingModal}
            maLichChieu={maLichChieu}
          />,
          document.body
        )}
    </div>
  );
};
export default Movie;


