import "./productList.css";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { Link } from "react-router-dom";
import axios from "axios";
import { React, useEffect, useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from "@material-ui/core/Button";

const API = process.env.REACT_APP_API;

const columns = [
  { field: "hangmuc", headerName: "Hạng mục", width: 200 },
  {
    field: "nam2006",
    headerName: "Năm 2006",
    width: 160,
  },
  {
    field: "nam2007",
    headerName: "Năm 2007",
    width: 170,
  },
  {
    field: "nam2008",
    headerName: "Năm 2008",
    width: 200,
  },
  {
    field: "nam2010",
    headerName: "Năm 2010",
    width: 200,
  },
];
export default function RectifierTransformerList() {
  const [loading, setLoading] = useState(true);
  const [deviceInfo, setDeviceInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/rectifierTransformerList`)
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
            fields: ["hangmuc", "nam2006", "nam2007", "nam2008", "nam2010"],
            utf8WithBom: true,
          }}
        />
      </GridToolbarContainer>
    );
  }

  return (
    <div className="productList">
      <Topbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: "100%" }}>
          {/* {localStorage.getItem("role") !== "viewer" ? (
            <Button
              variant="contained"
              href="/newRectifier"
              style={{ margin: "40px" }}
              color="secondary"
              startIcon={<AddBoxIcon />}
            >
              <b>Thêm mới Bộ trung tâm</b>
            </Button>
          ) : null} */}
          <DataGrid
            rows={deviceInfo}
            components={{
              Toolbar: CustomToolbar,
            }}
            autoHeight
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            loading={loading}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
