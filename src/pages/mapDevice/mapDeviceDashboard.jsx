import Map from "../../components/googleMap/mapDevice";
import "./mapDevice.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { React } from "react";

export default function MapDeviceDashboard() {
  return (
    <div className="general">
      <Topbar />
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <div style={{ width: "100%" }}>
          <div className="title">
            <h1 className="productTitle">Bản đồ</h1>
          </div>
          <div className="note">
            <p>
              Bản đồ hiển thị vị trí các vùng theo dõi.
            </p>
          </div>
          <Map />         
        </div>
      </div>
    </div>
  );
}
