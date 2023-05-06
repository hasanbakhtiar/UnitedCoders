import { createStore } from "redux";
import blogReducer from "../reducers/blogReducer";



const configureStore =()=>{
    const store= createStore(blogReducer)
    return store;
}

export default configureStore;