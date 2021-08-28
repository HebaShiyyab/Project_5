import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setResult } from "../../reducers/SearchResult";
import Axios from "axios";
import "./navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt from "jsonwebtoken";
const token = localStorage.getItem("token");
const decoded = jwt.decode(token);

const Navigation = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [KeyWord, setKeyWord] = useState("");

  const state = useSelector((state) => {
    return {
      searched_book: state.searchResult.result,
    };
  });

  const handleClick = (e) => {
    if (!KeyWord) {
      e.preventDefault();
    } else {
      Axios.get(`http://localhost:5000/book/search?KeyWord=${KeyWord}`).then(
        (res) => {
          dispatch(setResult(res.data));
          history.push("/result");
        }
      );
    }
  };
  // const token1 = localStorage.getItem("token");

  return (
    <div className="NavBar">
      <Link to="/home" className="Link">
        {" "}
        <img
          src="https://www.pinclipart.com/picdir/big/204-2041426_library-clipart-bookworm-clip-art-book-worm-png.png"
          style={{
            hight: "75px",
            width: "75px",
            cursor:"pointer" 
          }}alt="a book worm"
        />
      </Link>
      <Link to="/home" className="Link">
    
          Home
      </Link>
      <Link to="/Category" className="Link">
        Category
      </Link>
      <Link to="/authors" className="Link">
        Author
      </Link>
      {/* <Link to="/admin" className="Link">
          Admin Page
        </Link> */}

      {token&&decoded.role_id === 1 ?  (
        
        <Link to="/admin" className="Link" style={{display:"inherit"}}>
          Admin Page
        </Link>
      ) : ""}

      <Link to="/contact" className="Link">
        Contact
      </Link>

      <div className="search">
        <input
          type="text"
          className="searchBar"
          placeholder="Search book"
          onChange={(e) => {
            setKeyWord(e.target.value);
          }}
        />
        <button className="button-search" onClick={handleClick}>
          Search
        </button>
      </div>
      {!token ? (
        <>
          <Link to="/login" className="Link">
            Log In
          </Link>
          <Link to="/Register" className="Link">
            Register
          </Link>
        </>
      ) : (
        <Link to="/login" className="Link">
          Log out
        </Link>
      )}
    </div>
  );
};

export default Navigation;
