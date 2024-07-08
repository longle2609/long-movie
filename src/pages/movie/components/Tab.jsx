/* eslint-disable react/prop-types */
import { format, parseISO } from "date-fns";
import { isEmpty, map, uniqueId } from "lodash";
// eslint-disable-next-line no-unused-vars
import React, { useMemo } from "react";

// eslint-disable-next-line react/prop-types
export default function TabComponent({
  cumRapChieu,
  handleBookingModal,
  setMaLichChieu,
}) {
  const renderCumRapChieu = useMemo(() => {
    const formatMovieDate = (movieDate) => {
      const date = new Date(parseISO(movieDate));
      console.log(date);
      return format(date, "dd-MM-yyyy ~ HH:mm");
    };

    if (isEmpty(cumRapChieu)) {
      return;
    }
    return map(cumRapChieu, (rap) => {
      return (
        <div className="text-white" key={uniqueId("rap_")}>
          <p className="mb-5 m-[10px]">{rap.tenCumRap}</p>
          {map(rap.lichChieuPhim, (lich) => {
            return (
              <span
                className="rounded-md bg-[#162F5F] p-[8px] m-[10px] hover:bg-[#31D7A9] cursor-pointer inline-block"
                key={uniqueId("lichChieu_")}
                onClick={() => {
                  handleBookingModal();
                  setMaLichChieu(lich.maLichChieu);
                }}
              >
                {formatMovieDate(lich.ngayChieuGioChieu)}
              </span>
            );
          })}
        </div>
      );
    });
  }, [cumRapChieu, handleBookingModal, setMaLichChieu]);
  return <div>{renderCumRapChieu}</div>;
}
