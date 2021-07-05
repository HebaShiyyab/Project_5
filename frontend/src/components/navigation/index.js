import React, { useState } from "react";
import Axios from "axios";
import { Link} from "react-router-dom";
import "./navigation.css";
// import { searchBook } from "../../reducers/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
//   const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  // I'm not sure if it's necessary for navigation to have a reducer
//   const state = useSelector((state) => {
//     return {
//       searched_book: state.navigation.searched_book,
//     };
//   });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    if (!search) {
      e.preventDefault();
    } else {
      // How to get all authors' names for comparison?
      // if search value is an author, then search books by author. Otherwise, search book by title
      if (search === "author_name") {
        Axios.get(`http://localhost:5000/book/search_author?author=${search}`)
          .then((res) => {
            // dispatch(searchBook(res.data));
          })
          .catch((err) => {
            throw err;
          });
      } else {
        Axios.get(`http://localhost:5000/book/search_title?title=${search}`)
          .then((res) => {
            // dispatch(searchBook(res.data));
          })
          .catch((err) => {
            throw err;
          });
      }
    }
  };

  
  return (
    <div className="NavBar">
      <Link to="/login" style={{textDecoration: "none",}}>دخول</Link>
      <Link to="/Register" style={{textDecoration: "none",}}>التسجيل</Link>
      <Link to="/categories" style={{textDecoration: "none",}}>الاقسام</Link>
      <Link to="/authors" style={{textDecoration: "none",}}>المؤلفين</Link>
      <Link to="/contact" style={{textDecoration: "none",}}>اتصل بنا</Link>
      <input
        type="text"
        placeholder="Search book by title or author"
        onChange={handleChange}
      />
      <span>
        <button onClick={handleClick}>Search</button>
      </span>
      {/* Should search results be displayed in main component? Or should it be redirected into a new page? */}
    </div>
  );
};

export default Navigation;
