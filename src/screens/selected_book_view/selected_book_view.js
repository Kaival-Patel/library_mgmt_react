import { Col } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { APIBOOKCOVERURL } from "../../constants";
import "./selected_book_view.css";
function SelectedBookView() {
  const state = useSelector((state) => state.dashboard_view_reducer);
  return (
    <div className="about_book">
      <h3 className="header_title">About the book</h3>
      <img className="book_view" src={APIBOOKCOVERURL + "/" + state.cover} />
      <h3 className="book_title">{state.name}</h3>
      <h3 className="book_author">{state.author}</h3>
      <div className="book_info">
        <div className="book_info_bar">
          <h4>{state.pages}</h4>
          <h5>Pages</h5>
        </div>
        <div className="divider"></div>
        <div className="book_info_bar">
          <h4>{250}</h4>
          <h5>Reviews</h5>
        </div>
        <div className="divider"></div>
        <div className="book_info_bar">
          <h4>{548}</h4>
          <h5>Ratings</h5>
        </div>
      </div>
      <div className="read_btn">
        <h3>Read</h3>
      </div>
    </div>
  );
}

export default SelectedBookView;
