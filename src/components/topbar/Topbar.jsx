import React from "react";
import "./topbar.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function Topbar() {
  let history = useHistory();
  function logOut() {
    history.replace("/");
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Quản lý CSDL nông nghiệp</span>
        </div>
        <div className="topRight">
          <Button variant="contained" onClick={logOut}>
            <ExitToAppIcon /><b> Đăng xuất</b>
          </Button>
        </div>
      </div>
    </div>
  );
}
