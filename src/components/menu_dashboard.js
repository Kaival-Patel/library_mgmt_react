import { Menu } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardViewReducer, SET_VIEW } from "../reducers/dashboard_view_reducers";
import "./menu_dashboard.css";
function DashboardMenu() {
  const items = [
    {
      label: "BOOKS",
      key: "books",
    },
    {
      label: "AUDIOBOOKS",
      key: "audiobooks",
    },
    {
      label: "PODCASTS",
      key: "podcasts",
    },
  ];
  const state = useSelector((state) => state.dashboard_reducer);
  const dispatch = useDispatch();
  const onClick = (e) => {
    dispatch(SET_VIEW(e.key));
  };
  return (
    <Menu
      className="scaffold"
      onClick={onClick}
      selectedKeys={[state]}
      mode="horizontal"
      color="green"
      items={items}
    />
  );
}

export default DashboardMenu;
