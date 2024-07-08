import { getDaysInMonth } from "date-fns";
import fetcher from "./fetcher";

export const manageBookingApi = async (maLichChieu) => {
  try {
    const response = await fetcher.get(
      `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
    return response.data.content;
  } catch (exception) {
    throw new Error(exception);
  }
};

export const bookingApi = async (objBooking) => {
  if (!objBooking) {
    return;
  }
  const { maLichChieu, danhSachVe } = objBooking;
  try {
    const response = await fetcher.post(`/QuanLyDatVe/DatVe`, {
      maLichChieu,
      danhSachVe,
    });
    return response.data.content;
  } catch (exception) {
    throw new Error(exception);
  }
};
