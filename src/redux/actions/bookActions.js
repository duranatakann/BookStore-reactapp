import * as actionTypes from "./actionTypes";

export function getBooksSuccess(books) {
  return { type: actionTypes.GET_BOOKS_SUCCESS, payload: books };
}

export function createBookSuccess(book) {
  return { type: actionTypes.CREATE_BOOK_SUCCESS, payload: book };
}

export function updateBookSuccess(book) {
  return { type: actionTypes.UPDATE_BOOK_SUCCESS, payload: book };
}

export function saveBookApi(book) {
  return fetch("http://localhost:3000/books/" + (book.id || ""), {
    method: book.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(book)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveBook(book) {
  return function(dispatch) {
    return saveBookApi(book)
      .then(savedBook => {
        book.id
          ? dispatch(updateBookSuccess(savedBook))
          : dispatch(createBookSuccess(savedBook));
      })
      .catch(error => {
        throw error;
      });
  };
}

export async function handleResponse(response){
  if(response.ok){
    return response.json()
  }

  const error = await response.text()
  throw new Error(error)
}

export function handleError(error){
  console.error("Bir hata oluştu")
  throw error;
}

export function getBooks(categoryId) {
  return function(dispatch) {
    let url = "http://localhost:3000/books";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getBooksSuccess(result)));
  };
}
