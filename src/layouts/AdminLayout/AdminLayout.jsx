import React from "react";
import Sidebar from "../../components/Sidebar";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="">
      <Row>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={20}>
          <main className="w-full min-h-screen bg-gray-200">
            ---Admin Layout ---
            <Outlet />
            --- ---
          </main>
        </Col>
      </Row>
    </div>
  );
};

export default AdminLayout;
