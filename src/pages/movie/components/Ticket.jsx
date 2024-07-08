import { useCallback, useEffect, useState } from "react";
import { Tabs } from "antd";
import { isEmpty, map, uniqueId } from "lodash";
import TabComponent from "./Tab";
import { getTicketApi } from "../../../api/movie.api";

// eslint-disable-next-line react/prop-types
const Ticket = ({ movieId, handleBookingModal, setMaLichChieu }) => {
  const [arrRap, setArrRap] = useState([]);
  console.log(arrRap);

  const getQuanLyRap = useCallback(() => {
    getTicketApi(movieId)
      .then((result) => {
        setArrRap(result.heThongRapChieu);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  useEffect(() => {
    getQuanLyRap();
  }, [getQuanLyRap]);
  return (
    <div>
      <div className="bg-[#032055] container-me">
        {!isEmpty(arrRap) && (
          <Tabs
            centered
            tabPosition="top"
            items={map(arrRap, (rap) => {
              return {
                label: (
                  <img
                    className="w-[30px] sm:w-[50px] md:w-[70px] lg:w-[90px]"
                    src={rap.logo}
                    alt=""
                  />
                ),
                key: uniqueId("tab_"),
                children: (
                  <TabComponent
                    cumRapChieu={rap.cumRapChieu}
                    handleBookingModal={handleBookingModal}
                    setMaLichChieu={setMaLichChieu}
                  />
                ),
              };
            })}
          />
        )}
      </div>
    </div>
  );
};

export default Ticket;
