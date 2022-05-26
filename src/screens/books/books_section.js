import { Card, Col, List, Row } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { APIBOOKCOVERURL } from "../../constants";
import { getBooks } from "../../services/book_services";
import "./books_section.css";

function BookCard({ book }) {
  return (
    <div className="bookCard">
      <img className="bookCover" src={APIBOOKCOVERURL + "/" + book.cover} />
      <div className="bookContent">
        <div className="name">
          {book.name}
        </div>
        <p className="author">
          {book.author}
        </p>
        <div className="footer">
          <div className="footer_content">
            {book.pages}
          </div>
          <div className="footer_title">
            Pages
          </div>
        </div>
      </div>
    </div>
  );
}

function BookSection({ booksList }) {
  return (
    <div>
      <h3 className="title">For you</h3>
      <Row>
        {booksList.map((item) => (
          <Col xs={24} sm={12}>
            {BookCard({book:item})}
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
