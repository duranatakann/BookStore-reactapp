import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveBookReducer(
  state = initialState.savedBook,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_BOOK_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_BOOK_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
