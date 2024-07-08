import fetcher from "./fetcher";

export const cinema = {
    getDataTheater: () => {
        return fetcher.get("/QuanLyRap/LayThongTinHeThongRap");
    },
    getDataShowTime: (rap) => {
        return fetcher.get(
            `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${rap}&maNhom=GP02`
        );
    },
};
