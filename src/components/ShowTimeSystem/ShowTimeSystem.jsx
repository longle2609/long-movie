import "./showTimeSystem.scss";
import { Tabs } from "antd";
import { useEffect, useState } from "react";
import { cinema } from "../../api/cinema.api";
import TheaterSystem from "../TheaterSystem/TheaterSystem";
const ShowTimeSystem = () => {
    const [arrRap, setArrRap] = useState([]);
    useEffect(() => {
        cinema
            .getDataTheater()
            .then((res) => {
                setArrRap(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="he_thong_lich_chieu">
            <div className="container">
                <Tabs
                    tabPosition="left"
                    items={arrRap.map((rap) => {
                        return {
                            label: <img className="w-16" src={rap.logo} />,
                            key: rap.maHeThongRap,
                            children: (
                                <TheaterSystem
                                    maHeThongRap={rap.maHeThongRap}
                                />
                            ),
                        };
                    })}
                />
            </div>
        </div>
    );
};

export default ShowTimeSystem;
