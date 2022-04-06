import "./userList.css";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import AddBoxIcon from "@material-ui/icons/AddBox";
import axios from "axios";
import { React, useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from "@material-ui/core/Button";

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

export default function UserList() {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAPI() {
      axios
        .get(`${API}/api/users`)
        .then((res) => {
          setLoading(false);
          // console.log(res);
          const info = res.data;
          setUserInfo(info);
        })
        .catch((error) => console.log(error));
    }
    fetchAPI();
  }, []);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport
          csvOptions={{
            fields: [
              "hangmuc",
              "nam2006",
              "nam2007",
              "nam2008",
              "nam2010",
            ],
            utf8WithBom: true,
          }}
        />
      </GridToolbarContainer>
    );
  }

  return (
    <div className="userList">
      <Topbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: "100%" }}>
          <DataGrid
            rows={userInfo}
            components={{
              Toolbar: CustomToolbar,
            }}
            disableSelectionOnClick
            autoHeight
            columns={columns}
            pageSize={8}
            checkboxSelection
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
