import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./bookPage.css";

function EditBookPage() {
  const [data, setData] = useState([]);
  const [book_id, setBook_id] = useState(0);
  const [book_img, setBook_img] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [publisher, setPublisher] = useState("");
  const [edition, setEdition] = useState("");
  const [pages, setPages] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const getBookById = () => {
    axios
      .get(`http://localhost:5000/book/${book_id}`)
      .then((result) => {
        setData(result.data[0]);
        setBook_img(result.data[0].book_img);
        setTitle(result.data[0].title);
        setDescription(result.data[0].description);
        setPublisher(result.data[0].publisher);
        setEdition(result.data[0].edition);
        setPages(result.data[0].pages);
        setPrice(result.data[0].price);
        setAuthor(result.data[0].author);
      })
      .catch((err) => {
        throw err;
      });
  };

  const EditBook = () => {
    axios
      .put(
        `/book/${book_id}`,
        {
          book_img: book_img,
          title: title,
          description: description,
          publisher: publisher,
          edition: edition,
          pages: pages,
          price: price,
          author: author,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((result) => {
        setMessage("Update successfully");
      })
      .catch((err) => {
        setMessage("not Updated ");
        throw err;
      });
  };

  return (
    <div className="editBook">
      <h1 style={{ color: "#a24e12", marginLeft: "40rem", marginTop: "2rem" }}>
        Edit book
      </h1>
      <table className="tableEdit">
        <tr>
          <th>Book Id</th>
          <th>
            {" "}
            <input
              type="number"
              placeholder="book_id here "
              onChange={(e) => {
                setBook_id(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th></th>
          <th>
            <button onClick={getBookById} className="button-Add">
              get Book
            </button>
          </th>
        </tr>
        <tr>
          <th>URL picture</th>
          <th>
            <input
              type="text"
              placeholder="URL picture here "
              defaultValue={data.book_img}
              onChange={(e) => {
                setBook_img(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>Title</th>
          <th>
            <input
              type="text"
              placeholder="title here "
              defaultValue={data.title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>Description</th>
          <th>
            <input
              type="text"
              placeholder="description here "
              defaultValue={data.description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>Publisher</th>
          <th>
            <input
              type="text"
              placeholder="publisher here "
              defaultValue={data.publisher}
              onChange={(e) => {
                setPublisher(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>Edition</th>
          <th>
            <input
              type="text"
              placeholder="edition here "
              defaultValue={data.edition}
              onChange={(e) => {
                setEdition(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>pages Number</th>
          <th>
            <input
              type="Number"
              placeholder="pages here "
              defaultValue={data.pages}
              onChange={(e) => {
                setPages(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>Price</th>
          <th>
            <input
              type="Number"
              placeholder="price here "
              defaultValue={data.price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>Author</th>
          <th>
            <input
              type="text"
              placeholder="author here "
              defaultValue={data.author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th></th>
          <th>
            <button onClick={EditBook} className="button-Add">
              Edit Book
            </button>
          </th>
        </tr>
        <tr>
          <th>{message}</th>
        </tr>
      </table>
    </div>
  );
}

export default EditBookPage;
