import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ScreenThumb from "../../assets/images/screen-thumb.png";
import { bookingApi, manageBookingApi } from "../../api/booking.api";
import { filter, findIndex, isEmpty, map, reduce } from "lodash";
import { AlertMessage } from "../../App";
import Loading from "../../components/Loading/Loading";
import { createPortal } from "react-dom";

// eslint-disable-next-line react/prop-types

const INIT_DATA = {
  danhSachGhe: [],
  thongTinPhim: {},
};

// eslint-disable-next-line react/prop-types
const Booking = ({ maLichChieu, handleBookingModal }) => {
  const divElement = useRef(null);
  const { handleAlert } = useContext(AlertMessage);

  const [isLoading, setIsLoading] = useState(false);

  const [thongTinPhongVe, setThongTinPhongVe] = useState(INIT_DATA);
  console.log(thongTinPhongVe);
  const [seat, setSeat] = useState([]);
  console.log(seat);
  const [giaTien, setGiaTien] = useState(0);

  const getThongTinPhim = useMemo(() => {
    return thongTinPhongVe.thongTinPhim;
  }, [thongTinPhongVe.thongTinPhim]);

  const handleCloseModal = useCallback(
    (event) => {
      console.log(event.target);
      if (event.target === divElement.current) {
        handleBookingModal?.();
      }
    },
    [handleBookingModal]
  );

  const getBookingDetail = useCallback(() => {
    setIsLoading(true);
    const respone = manageBookingApi(maLichChieu);
    respone
      .then((result) => {
        setThongTinPhongVe(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [maLichChieu]);

  const sendBooking = useCallback(() => {
    const danhSachVe = map(seat, (e) => {
      return { maGhe: e.maGhe, giaVe: e.gia };
    });
    const response = bookingApi({ maLichChieu, danhSachVe });
    response
      .then((result) => {
        handleAlert("success", result);
      })
      .catch(() => {
        handleAlert("error", "Đặt vé không thành công!");
      })
      .finally(() => {
        handleBookingModal?.();
      });
  }, [handleAlert, handleBookingModal, maLichChieu, seat]);

  const renderGhe = useMemo(() => {
    if (!thongTinPhongVe.danhSachGhe) {
      return null;
    }
    return map(thongTinPhongVe.danhSachGhe, (ghe) => {
      return (
        <div
          className="basis-[calc(100%/16)] p-1 min-w-[40px]"
          onClick={() => {
            setSeat((prev) => {
              if (findIndex(seat, (e) => e.ghe === ghe.tenGhe) < 0) {
                return [
                  ...prev,
                  { ghe: ghe.tenGhe, gia: ghe.giaVe, maGhe: ghe.maGhe },
                ];
              }
              return filter(prev, (e) => {
                return e.ghe !== ghe.tenGhe;
              });
            });
            // setGiaTien((prev) => {
            //   return prev + Number(ghe.giaVe);
            // });
          }}
          key={ghe.maGhe}
        >
          <div
            className={`rounded-[4px] text-[8px] border-white border border-solid py-1 px-1 hover:bg-slate-400 cursor-pointer ${
              findIndex(seat, (e) => e.ghe === ghe.tenGhe) >= 0
                ? "activeSeat"
                : ""
            } ${ghe.daDat ? "disabled" : ""} ${
              ghe.loaiGhe === "Vip" ? "isVip" : ""
            }`}
          >
            {ghe.tenGhe}
          </div>
        </div>
      );
    });
  }, [seat, thongTinPhongVe.danhSachGhe]);

  useEffect(() => {
    window.addEventListener("click", handleCloseModal);

    return () => {
      window.addEventListener("click", handleCloseModal);
    };
  }, [handleCloseModal]);

  useEffect(() => {
    getBookingDetail();
  }, [getBookingDetail]);

  useEffect(() => {
    if (isEmpty(seat)) {
      setGiaTien(0);
      return;
    }
    const gia = reduce(
      seat,
      (acc, curValue) => {
        return acc + curValue.gia;
      },
      0
    );
    setGiaTien(gia);
  }, [seat]);

  return (
    <div
      className="absolute inset-0 bg-[rgba(0,0,0,0.7)] flex items-center z-50"
      ref={divElement}
      style={{
        display: isEmpty(thongTinPhongVe.danhSachGhe) ? "none" : "flex",
      }}
    >
      <div className="max-w-[90%] mx-auto border border-solid border-[rgba(255,255,255,0.2)] rounded-[20px] overflow-hidden py-[30px] bg-[#001232]">
        <div className="text-white">
          {/* <div className="text-center">
            <h3 className="text-[60px] font-bold">VENUS</h3>
            <p className="mt-2 text-[20px] font-thin">ENGLISH | 2D</p>
          </div> */}
          {/* <div className="bg-[#032055] py-3">
            <div className="text-center text-[16px] mb-3">
              <p>Đổi suất chiếu</p>
            </div>
            <div className="flex justify-evenly">
              <p>Ngày</p>
              <p>Giờ</p>
            </div>
          </div> */}
          <div className="lg:flex lg:justify-center lg:items-start">
            <div className="basis-0 grow-[2]">
              <div className="my-3">
                <div className="text-center">
                  <span className="text-[28px] relative inline-block px-[50px] py-[10px] before:content-[''] before:absolute before:w-[80%] before:h-[1px] before:top-0 before:translate-x-1/2 before:right-1/2 before:bg-[#213a69] after:content-[''] after:absolute after:w-[100%] after:h-[1px] after:bottom-0 after:translate-x-1/2 after:right-1/2 after:bg-[#213a69]">
                    SCREEN
                  </span>
                </div>
                <div className="flex justify-center">
                  <img
                    className="w-[366px] h-[31px] my-5"
                    src={ScreenThumb}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <span className="text-[#31d7a9] text-[28px] relative inline-block px-[50px] py-[10px] before:content-[''] before:absolute before:w-[80%] before:h-[1px] before:top-0 before:translate-x-1/2 before:right-1/2 before:bg-[#213a69] after:content-[''] after:absolute after:w-[100%] after:h-[1px] after:bottom-0 after:translate-x-1/2 after:right-1/2 after:bg-[#213a69]">
                    SILVER PLUS
                  </span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <div className="px-[30px] w-fit text-center mx-auto min-w-[700px]">
                  <div className="flex flex-wrap">{renderGhe}</div>
                </div>
              </div>
              <div className="flex justify-center gap-[40px] mt-3">
                <div className="flex align-middle">
                  <span className="rounded-[4px] text-[8px] border-white border border-solid py-1 px-3 me-2"></span>
                  <span>Ghế trống</span>
                </div>
                <div className="flex align-middle">
                  <span className="rounded-[4px] text-[8px] border-red-500 border border-solid py-1 px-3 me-2"></span>
                  <span>Ghế VIP</span>
                </div>
                <div className="flex align-middle">
                  <span className="rounded-[4px] text-[8px] border-white border border-solid py-1 px-3 me-2 opacity-[0.2]"></span>
                  <span>Ghế đã đặt</span>
                </div>
              </div>
            </div>
            <div className="my-5 pb-1 px-[10px] basis-0 grow-[1]">
              <div className="text-center text-[20px] text-[#31d7a9]  my-5 font-bold">
                <p>{getThongTinPhim.tenCumRap}</p>
              </div>
              <div className="flex leading-6 lg:leading-[55px] justify-between">
                <p className="me-5">Address:</p>
                <p className="text-[#31d7a9]">{getThongTinPhim.diaChi}</p>
              </div>
              <div className="flex leading-6 lg:leading-[55px] justify-between">
                <p>Room:</p>
                <p className="text-[#31d7a9]">{getThongTinPhim.tenRap}</p>
              </div>
              <div className="flex leading-6 lg:leading-[55px] justify-between">
                <p>Date:</p>
                <p className="text-[#31d7a9]">{`${getThongTinPhim.ngayChieu} - ${getThongTinPhim.gioChieu}`}</p>
              </div>
              <div className="flex leading-6 lg:leading-[55px] justify-between">
                <p>Name:</p>
                <p className="text-[#31d7a9] uppercase">
                  {getThongTinPhim.tenPhim}
                </p>
              </div>
              <div className="flex leading-6 lg:leading-[55px] justify-between">
                <p>Seat:</p>
                <p className="text-[#31d7a9]">
                  {isEmpty(seat)
                    ? "-"
                    : reduce(
                        seat,
                        (acc, currentValue) => {
                          return [...acc, currentValue.ghe];
                        },
                        []
                      ).join(", ")}
                </p>
              </div>
              <div className="flex leading-6 lg:leading-[55px] justify-between">
                <p>Total Price:</p>
                <p className="text-[#31d7a9]">{giaTien} VNĐ</p>
              </div>
              <div className="my-9 text-center">
                <span
                  className="text-white text-[16px] font-bold rounded-[25px] buttonGradient py-[11px] px-[24px] cursor-pointer hover:shadow-[0px_10px_15px_0px_rgba(59,55,188,0.5)]"
                  onClick={() => {
                    sendBooking();
                  }}
                >
                  PAY TICKET
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading && createPortal(<Loading />, document.body)}
    </div>
  );
};

export default Booking;
