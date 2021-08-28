import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./bookDetails.css";

export default function BookDetails() {
  const [book_img, setBook_img] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [publisher, setPublisher] = useState("");
  const [edition, setEdition] = useState("");
  const [pages, setPages] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");

  const state = useSelector((state) => {
    return { details: state.BookDetails.details };
  });

  useEffect(() => {
    axios.get(`/book/search?KeyWord=${state.details.title}`).then((res) => {
      setBook_img(res.data[0].book_img);
      setTitle(res.data[0].title);
      setDescription(res.data[0].description);
      setPublisher(res.data[0].publisher);
      setEdition(res.data[0].edition);
      setPages(res.data[0].pages);
      setPrice(res.data[0].price);
      setAuthor(res.data[0].author);
    });
  }, []);

  return (
    <div className="details">
      <table>
        <tr>
          <th className="detailsWithoutImg">
            <p>العنوان: {title}</p>
            <p className="">المؤلف: {author}</p>
            <p className="">الوصف: {description}</p>
            <p className="">السعر: {price}</p>
            <p className="">الطبعة: {edition}</p>
            <p className="">عدد الصفحات: {pages}</p>
            <p className="">دار النشر: {publisher}</p>
            <div className="buttonBuyAdd"></div>
          </th>
          <th>
            <img className="img" src={book_img} alt="غلاف الكتاب" />
          </th>
        </tr>
      </table>
    </div>
  );
}
