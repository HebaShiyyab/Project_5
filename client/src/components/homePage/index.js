import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setBooks } from "../../reducers/homePage";
import { setDetails } from "../../reducers/bookDetail";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import "./homePage.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [stars, setStars] = useState(0);
  const [keyWord, setKeyWord] = useState("");

  const state = useSelector((state) => {
    return {
      books: state.homePage.books,
    };
  });

  useEffect(() => {
    axios
      .get("/book/")
      .then((res) => {
        dispatch(setBooks(res.data));
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const ratingChanged = (e) => {
    setStars(e.target.value);
  };

  const details = (title) => {
    axios
      .get(`/book/search?KeyWord=${title}`)
      .then((res) => {
        dispatch(setDetails(res.data[0]));
        history.push("/bookDetails");
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div className="home_page">
      {state.books.map((elem, index) => {
        return (
          <div key={index} book_id={elem.book_id} className="book">
            <img
              className="book_image"
              src={elem.book_img}
              alt="غلاف الكتاب"
              style={{ height: "20rem", width: "100%" }}
            />
            <hr />
            <p className="book_element">العنوان: {elem.title}</p>
            <p className="book_element">المؤلف: {elem.author}</p>
            <p className="book_element">السعر: {elem.price}</p>
            <ReactStars
              count={5}
              onClick={ratingChanged}
              size={24}
              activeColor="#FFD700"
              isHalf={true}
            />
            <button
              className="button-Add"
              value={elem.title}
              onClick={(e) => {
                details(e.target.value);
              }}
            >
              Details
            </button>
          </div>
        );
      })}
    </div>
  );
}
