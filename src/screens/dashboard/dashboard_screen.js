import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DashboardMenu from "../../components/menu_dashboard";
import MenuSearchBar from "../../components/menu_searchbar";
import { validateApiResponse } from "../../constants";
import { getBooks } from "../../services/book_services";
import AudioBooks from "../audiobooks/audio_books";
import BookSection from "../books/books_section";
import "./dashboard_screen.css";

// function renderBody({ selected_state, body_state }) {
//   switch (selected_state) {
//     case "books":
//       return <BookSection booksList={body_state} />;
//     case "audiobooks":
//       return <AudioBooks />;
//     default:
//       return <BookSection />;
//   }
// }
function Dashboard() {
  const state = useSelector((state) => state.dashboard_reducer);
  const user_state = useSelector((state) => state.user_reducer);
  const [booksList, setbooksList] = useState([]);
  const [booksLoading, setBooksLoading] = useState(true);
  useEffect(() => {
    console.info(user_state.user);
    getBooks({ token: user_state.user.token })
      .then((response) => {
        console.log(response);
        if (validateApiResponse(response)) {
          setbooksList(response.r);
          setBooksLoading(false);
        }
        else{
          setBooksLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setBooksLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="header">
        <DashboardMenu />
        <MenuSearchBar />
      </div>
      <div className="body">
        {state == "books" ? (
          booksLoading ? (
            <Spin />
          ) : (
            <BookSection booksList={booksList} />
          )
        ) : state == "audiobooks" ? (
          <AudioBooks />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
