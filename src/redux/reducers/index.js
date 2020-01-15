import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import bookListReducer from "./bookListReducer"
import cartReducer from "./cartReducer"
import saveBookReducer from "./saveBookReducer"



const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    bookListReducer,
    cartReducer,
    saveBookReducer
})

export default rootReducer;