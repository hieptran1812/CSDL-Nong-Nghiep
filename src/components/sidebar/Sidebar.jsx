import "./sidebar.css";
import {
  Dashboard,
  Room,
  PermIdentity,
  SettingsCell,
  NetworkCheck,
} from "@material-ui/icons";
import NotificationsIcon from "@material-ui/icons/Notifications";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { React, useEffect, useState } from "react";

const API = process.env.REACT_APP_API;

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <NavLink to="/home" className="link" activeClassName="active">
                <Dashboard className="sidebarIcon" />
                Tổng quan
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink
                to="/mapDevice"
                className="link"
                activeClassName="active"
              >
                <Room className="sidebarIcon" />
                Bản đồ
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quản lý</h3>
          <ul className="sidebarList">
            {localStorage.getItem("role") !== "viewer" ? (
              <li className="sidebarListItem">
                <NavLink to="/users" className="link" activeClassName="active">
                  <PermIdentity className="sidebarIcon" />
                  Năng suất
                </NavLink>
              </li>
            ) : null}
            <li className="sidebarListItem">
              <NavLink
                to="/rectifierTransformerList"
                className="link"
                activeClassName="active"
              >
                <SettingsCell className="sidebarIcon" />
                Sản lượng
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
