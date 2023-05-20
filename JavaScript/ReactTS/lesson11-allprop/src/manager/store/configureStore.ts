import { createStore } from "redux"
import { productReducer } from "../reducer/productReducer";

const configureStore = ()=>{
    const store = createStore(productReducer);
    return store;
}

export default configureStore;