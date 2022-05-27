import { Card, Col, List, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APIBOOKCOVERURL } from "../../constants";
import { SET_SELECTED_VIEW } from "../../reducers/dashboard_selected_reducer";
import { getBooks } from "../../services/book_services";
import "./books_section.css";

function updateSelectedView(book, dispatch, state) {
  if (state === book) {
    dispatch(SET_SELECTED_VIEW(null));
  } else {
    dispatch(SET_SELECTED_VIEW(book));
  }
}

function BookCard({ book, onPress, selected }) {
  return (
    <div
      className="bookCard"
      style={selected ? { border: "2px solid #4A80F0" } : null}
      onClick={onPress}
    >
      <img className="bookCover" src={APIBOOKCOVERURL + "/" + book.cover} />
      <div className="bookContent">
        <div className="name">{book.name}</div>
        <p className="author">{book.author}</p>
        <div className="footer">
          <div className="footer_content">{book.pages}</div>
          <div className="footer_title">Pages</div>
        </div>
      </div>
    </div>
  );
}

function BookSection({ booksList }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.dashboard_view_reducer);
  return (
    <div>
      <h3 className="title">For you</h3>
      <Row>
        {booksList.map((item) => (
          <Col xs={24} sm={12}>
            {BookCard({
              book: item,
              onPress: () => {
                updateSelectedView(item, dispatch, state);
              },
              selected: state === item,
            })}
          </Col>
        ))}
      </Row>
      {/* <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 6, xl: 8, xxl: 10 }}
        dataSource={booksList}
        renderItem={(item) => <Card>{item.name}</Card>}
      /> */}
    </div>
  );
}

export default BookSection;
