import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function EditCategory() {
  const [category_id, setCategory_id] = useState(0);
  const [category, setCategory] = useState();
  const [message, setMessage] = useState("");

  const state = useSelector((state) => {
    return {
      token: state.login.token,
    };
  });
  const EditCategories = () => {
    axios.put(
      `http://localhost:5000/category/${category_id}`,
      {
        category: category,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((res) => {
      setMessage('Update successfully')

    })
    .catch((err) => {
      console.log(err);
      setMessage('not Updated ')
  })}

  return (
    <div className="EditCategory">
      <h1 style={{ color: "#a24e12", marginLeft: "32rem", marginTop: "2rem" }}>
        Edit Category
      </h1>
      <table className="tableEditCategory">
        <tr>
          {" "}
          <th>Category Id</th>
          <th>
            <input
              type="Number"
              placeholder="category_id here "
              onChange={(e) => {
                setCategory_id(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>Category</th>
          <th>
            <input
              type="text"
              placeholder="category here "
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th></th>
          <th>
            <button className="EditCategoryButton" onClick={EditCategories}>
              Edit Category
            </button>
          </th>
        </tr><tr> <th>{message} </th></tr>
      </table>
    </div>
  );
}

export default EditCategory;
