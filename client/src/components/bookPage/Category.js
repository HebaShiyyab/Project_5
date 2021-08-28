import React, { useState } from "react";
import axios from "axios";
import "./../Category/Category.css";

export default function Category() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("التصنيفات");

  const categories = (x) => {
    axios
      .get(`http://localhost:5000/book/Category/${x}`)
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <>
    <h1 className="h1"> {name}  </h1>
      {!show ?( <div className="categories">
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-31.png"
          onClick={() => {
            categories(1);
            setShow(true)
            setName("الروايات ")
          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-61.png"
          onClick={() => {
            categories(2);
            setShow(true)
            setName("سياسة ")

          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-71.png"
          onClick={() => {
            categories(3);
            setShow(true)
            setName("تاريخ ")

          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-41.png"
          onClick={() => {
            categories(4);
            setShow(true)
            setName("علوم ")

          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/11.png"
          onClick={() => {
            categories(5);
            setShow(true)
            setName("شعر ")

          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-91.png"
          onClick={() => {
            categories(6);
            setShow(true)
            setName(" قصص")

          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-12.png"
          onClick={() => {
            categories(7);
            setShow(true)
            setName("فلسفة")

          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/%D8%B3%D8%A7%D8%AE%D8%B1.png"
          onClick={() => {
            categories(8);
            setShow(true)
            setName("الأدب الساخر")

          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/deen.png"
          onClick={() => {
            categories(9);
            setShow(true)
            setName("كتب دينية")

          }}alt=''
          />
      </div>
      ):("")}
      <div className="AllCategory">
      {show? (<>{data.map((elem, index) => {
        return (
          <div key={index} book_id={elem.book_id} className="categoryDetails">
            <img
              className="imgCategoryDetails"
              src={elem.book_img}
              alt="غلاف الكتاب"
              />
            <hr />
            <p>العنوان: {elem.title}</p>
            <p>المؤلف: {elem.author}</p>
            <p>السعر(بالدينار): {elem.price}</p>
            {/* <ReactStars
              count={5}
              onClick={ratingChanged}
              size={24}
              activeColor="#FFD700"
              isHalf={true}
            /> */}
          </div>
        );
      })}</>):("")}</div>
{show ? (<button className="returnButton" onClick={()=>{setShow(false)}} >Back To Category</button>):("")}    

    </>
  );
}
