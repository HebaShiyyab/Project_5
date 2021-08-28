const connection = require("./../../db/db");

const getAllBooks = (req, res) => {
  const query = `SELECT * FROM book;`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.status(201).json(results);
  });
};

const getBooksByCategory = (req, res) => {
  const category_id = req.params.category_id;
  const query = `SELECT * FROM book WHERE category_id = ${category_id};`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.status(201).json(results);
  });
};

const deleteBooksByID = (req, res) => {
  const book_id = req.params.book_id;
  const query = `DELETE FROM book WHERE book_id = ${book_id};`;
  connection.query(query, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
};

const addNewBooks = (req, res) => {
  const {
    book_img,
    title,
    description,
    publisher,
    edition,
    pages,
    price,
    author,
  } = req.body;
  const query = `INSERT INTO book (book_img, title, description, publisher, edition, pages, price, author) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
  const data = [
    book_img,
    title,
    description,
    publisher,
    edition,
    pages,
    price,
    author,
  ];

  connection.query(query, data, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
};

const updateBooksByID = (req, res) => {
  const book_id = req.params.book_id;
  const {
    book_img,
    title,
    description,
    publisher,
    edition,
    pages,
    price,
    author,
  } = req.body;
  const query = `UPDATE book SET book_img = ?, title = ?, description = ?, publisher = ?, edition = ?, pages = ?, price = ?, author = ? WHERE book_id = ${book_id};`;
  const data = [
    book_img,
    title,
    description,
    publisher,
    edition,
    pages,
    price,
    author,
  ];

  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getBooksById = (req, res) => {
  const book_id = req.params.book_id;
  const query = `SELECT * FROM book WHERE book_id = ${book_id};`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.status(201).json(results);
  });
};

const getBook = (req, res) => {
  const KeyWord = req.query.KeyWord;
  const data = [KeyWord, KeyWord];
  const query = `SELECT * FROM book WHERE title = ? OR author = ?;`;
  connection.query(query, data, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
  });
};

module.exports = {
  getAllBooks,
  getBooksByCategory,
  deleteBooksByID,
  addNewBooks,
  updateBooksByID,
  getBooksById,
  getBook,
};
