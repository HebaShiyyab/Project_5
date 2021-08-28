import { createStore, combineReducers } from "redux";
import homePage from "./homePage";
import login from "./login";
import searchResult from "./SearchResult";
import BookDetails from "../reducers/bookDetail";
const reducers = combineReducers({
  homePage,
  login,
  searchResult,
  BookDetails,
});
const store = createStore(reducers);
export default store;
