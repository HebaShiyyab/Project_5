import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function AddCategory() {
  const [category, setCategory] = useState();
  const [success, setSuccess] = useState(undefined);
  const [message, setMessage] = useState("");


  const state = useSelector((state) => {
    return {
      token: state.login.token,
    };
  });
  const AddCategories = () => {
    axios
      .post(
        "http://localhost:5000/category",
        {
          category: category,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setSuccess(true);
        setMessage('add successfully')

      })
      .catch((err) => {
        console.log(err);
        setSuccess(false);
        setMessage('not added ')

        throw err;
      });
  };
  return (
    <div className="add-category">
              <h1 style={{color: "#a24e12", marginLeft: "33rem",  marginTop: "2rem"}}>Add Category</h1>

    <table className='categoryTable'>
    <tr><th>Add category</th>
    <th>
      <input
        type="text"
        placeholder="category here "
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      /></th></tr>
      <tr>
      <th></th>
      <th>
      <button className="category-button" onClick={AddCategories} >
        Add Category
      </button></th></tr>            <tr> <th>{message} </th></tr>
</table>
    </div>
  );
}

export default AddCategory;
