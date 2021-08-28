import React from "react";
import "./main.css";
import { Route } from "react-router-dom";
import Navigation from "../navigation/index";
import Login from "./../auth/login/index";
import SignUp from "./../auth/signUp/index";
import HomePage from "../homePage/index";
import Contact from "../Contact/Contact";
import Admin from "../adminPage/Admin";
import AddBookPage from "../bookPage/AddBook";
import EditBookPage from "../bookPage/EditBook";
import DeleteBookPage from "../bookPage/deleteBook";
import AddCategory from "../Category/AddCategory";
import EditCategory from "../Category/EditCategory";
import DeleteCategory from "../Category/DeleteCategory";
import Category from "../bookPage/Category";
import SearchResult from "../searchResult/SearchResult";
import Author from "../bookPage/Author";
import BookDetails from "../bookPage/bookDetails";

const Main = () => {
  return (
    <>
      <Navigation />
      <div className="Main">
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route path="/Register" render={() => <SignUp />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/admin" render={() => <Admin />} />
        <Route path="/AddBook" render={() => <AddBookPage />} />
        <Route path="/EditBook" render={() => <EditBookPage />} />
        <Route path="/DeleteBook" render={() => <DeleteBookPage />} />
        <Route path="/Category" render={() => <Category />} />
        <Route path="/AddCategory" render={() => <AddCategory />} />
        <Route path="/EditCategory" render={() => <EditCategory />} />
        <Route path="/DeleteCategory" render={() => <DeleteCategory />} />
        <Route path="/authors" render={() => <Author />} />
        <Route path="/result" render={() => <SearchResult />} />
        <Route path="/bookDetails" render={() => <BookDetails />} />

      </div>
    </>
  );
};

export default Main;
