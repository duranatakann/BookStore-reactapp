import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function bookListReducer(state=initialState.books,action){
    switch (action.type) {
        case actionTypes.GET_BOOKS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}