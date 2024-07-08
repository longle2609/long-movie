import { Tabs } from "antd";
import { useEffect, useState } from "react";
import moment from "moment";
import "./theaterSystem.scss";
import { cinema } from "../../api/cinema.api";
const TheaterSystem = ({ maHeThongRap }) => {
    const [arrCumRap, setArrCumRap] = useState([]);
    useEffect(() => {
        cinema
            .getDataShowTime(maHeThongRap)
            .then((res) => {
                setArrCumRap(res.data.content[0].lstCumRap);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [maHeThongRap]);
    return (
        <div className="he_thong_cum_rap">
            <Tabs
                style={{
                    height: "600px",
                }}
                tabPosition="left"
                items={arrCumRap.map((item, index) => {
                    // console.log(item);
                    return {
                        label: (
                            <div key={index} className="text-left w-[250px]">
                                <h3 className="uppercase text-green-600 font-medium truncate">
                                    {item.tenCumRap}
                                </h3>
                                <p className="truncate text-sm text-gray-400">
                                    {item.diaChi}
                                </p>
                            </div>
                        ),
                        key: index,
                        children: (
                            <div className="h-full overflow-y-scroll">
                                {item.danhSachPhim.map((phim, index) => {
                                    {
                                        /* console.log(phim) */
                                    }
                                    return (
                                        phim.dangChieu && (
                                            <div
                                                key={index}
                                                className="flex my-5 ml-5"
                                            >
                                                {/* hình ảnh  */}
                                                <div className="mr-5">
                                                    <img
                                                        className="h-40 w-40 object-cover"
                                                        src={phim.hinhAnh}
                                                        alt=""
                                                    />
                                                </div>
                                                {/* thông tin phim  */}
                                                <div>
                                                    {/* tên phim  */}
                                                    <h3>
                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded mr-2">
                                                            C18
                                                        </span>
                                                        <span className="text-xl font-medium text-white">
                                                            {phim.tenPhim}
                                                        </span>
                                                    </h3>
                                                    <div className="grid grid-cols-2 gap-5 mt-4">
                                                        {phim.lstLichChieuTheoPhim
                                                            .slice(0, 4)
                                                            .map(
                                                                (
                                                                    lichChieu,
                                                                    index
                                                                ) => {
                                                                    return (
                                                                        <div
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="py-2 px-5 bg-slate-100 rounded-md flex items-center"
                                                                        >
                                                                            <span className="text-green-600 font-medium text-lg">
                                                                                {moment(
                                                                                    lichChieu.ngayChieuGioChieu
                                                                                ).format(
                                                                                    "DD-MM-YYYY"
                                                                                )}
                                                                            </span>
                                                                            <span className="mx-1">
                                                                                ~
                                                                            </span>
                                                                            <span className="text-orange-600 font-medium text-lg mr-2">
                                                                                {moment(
                                                                                    lichChieu.ngayChieuGioChieu
                                                                                ).format(
                                                                                    "hh:mm"
                                                                                )}
                                                                            </span>
                                                                            {/* {lichChieu.ngayChieuGioChieu} */}
                                                                            <span className="text-white bg-red-600 py-1 px-2 rounded-md">
                                                                                {
                                                                                    lichChieu.tenRap
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    );
                                                                }
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    );
                                })}
                            </div>
                        ),
                    };
                })}
            />
        </div>
    );
};

export default TheaterSystem;
