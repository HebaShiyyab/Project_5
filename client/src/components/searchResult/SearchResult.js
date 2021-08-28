import React from "react";
import { useSelector } from "react-redux";
import "./SearchResult.css";

export default function SearchBar() {
  const state = useSelector((state) => state.searchResult.result);

  return (
    <div className="search">
      {state.map((elem, index) => {
        return (
          <div key={index} className="search-result">
            <img
              className=""
              src={elem.book_img}
              alt="غلاف الكتاب"
              style={{ height: "20rem", width: "100%" }}
            />
            <hr />
            <p className="">العنوان: {elem.title}</p>
            <p className="">المؤلف: {elem.author}</p>
            <p className="">الوصف: {elem.description}</p>
            <p className="">السعر: {elem.price}</p>
            <div className="buttonBuyAdd">
              <button className="addButton">Add to favorite</button>
              <button className="buyButton">Buy now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
