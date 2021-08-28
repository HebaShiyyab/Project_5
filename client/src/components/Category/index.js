import React from "react";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";
import "./Category.css" ;

import { Link, Route } from "react-router-dom";

function CategoryPage(role, token) {
  return (
    <div className="CategoryPage">
      <>
        <button className="admin-button">
          <Link to="/AddCategory" style={{ textDecoration: "none" ,color:"rgb(31, 38, 59)"}}>
            <div>Add Category</div>
          </Link>
        </button>
        <button className="admin-button">
          <Link to="/EditCategory" style={{ textDecoration: "none" ,color:"rgb(31, 38, 59)"}}>
            <div>Edit Category</div>
          </Link>
        </button>
        <button className="admin-button">
          <Link to="/DeleteCategory" style={{ textDecoration: "none" ,color:"rgb(31, 38, 59)" }}>
            <div>Delete Category</div>
          </Link>
        </button>
      </>

      <Route exact path="/AddCategory" component={AddCategory} />
      <Route exact path="/EditCategory" component={EditCategory} />
      <Route exact path="/DeleteCategory" component={DeleteCategory} />
    </div>
  );
}

export default CategoryPage;
