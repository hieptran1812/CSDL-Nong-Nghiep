import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";

import axios from "axios";
import { React, useEffect, useState } from "react";

const API = process.env.REACT_APP_API;

const columns = [
  {
    field: "hangmuc",
    headerName: "Hạng mục",
    width: 220,
  },
  {
    field: "nam2006",
    headerName: "Năm 2006",
    width: 220,
  },
  {
    field: "nam2007",
    headerName: "Năm 2007",
    width: 200,
  },
  {
    field: "nam2008",
    headerName: "Năm 2008",
    width: 200,
  },
  {
    field: "nam2010",
    headerName: "Năm 2010",
    width: 180,
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [deviceInfo, setDeviceInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/dashboardList`)
      .then((res) => {
        setLoading(false);
        // console.log(res);
        const data = res.data;
        setDeviceInfo(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport
          csvOptions={{
            fields: [
              "organization",
              "devType",
              "maChuoi",
              "dateUpdate",
              "date",
              "signalQuality",
              "devSerial",
            ],
            utf8WithBom: true,
          }}
        />
      </GridToolbarContainer>
    );
  }

  return (
    <div className="home">
      <Topbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: "100%" }}>
          <DataGrid
            rows={deviceInfo}
            components={{
              Toolbar: CustomToolbar,
            }}
            autoHeight
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            loading={loading}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
