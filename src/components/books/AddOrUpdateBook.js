import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveBook } from "../../redux/actions/bookActions";
import BookDetail from "./BookDetail";
import { validate } from "@babel/types";

function AddOrUpdateBook({
  books,
  categories,
  getBooks,
  getCategories,
  saveBook,
  history,
  ...props
}) {
  const [book, setBook] = useState({ ...props.book });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setBook({ ...props.book });
  }, [props.book]);

  function handleChange(event) {
    const { name, value } = event.target;
    setBook(previousBook => ({
      ...previousBook,
      [name]: name === "categoryId" ? parseInt(value, 10) : value
    }));

    validate(name,value);
  }

  function validate(name,value) {
    if (name === "bookName" && value === "") {
      setErrors(previousErrors => ({
        ...previousErrors,
        bookName: "Ürün ismi olmalıdır"
      }));
    }else{
        setErrors(previousErrors => ({
            ...previousErrors,
            bookName: ""
          }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    saveBook(book).then(() => {
      history.push("/dashboard");
    });
  }

  return (
    <BookDetail
    book={book}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

export function getBookById(books, bookId) {
  let book = books.find(book => book.id == bookId) || null;
  return book;
}

function mapStateToProps(state, ownProps) {
  const bookId = ownProps.match.params.bookId;
  const book =
  bookId && state.bookListReducer.length > 0
      ? getBookById(state.bookListReducer, bookId)
      : {};
  return {
    book,
    books: state.bookListReducer,
    categories: state.categoryListReducer
  };
}

const mapDispatchToProps = {
  getCategories,
  saveBook
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOrUpdateBook);
