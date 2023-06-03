import { combineReducers, createStore } from "redux"
import { productReducer } from "../reducer/productReducer";
import { wishReducer } from "../reducer/wishReducer";

const configureStore = ()=>{
    const store = createStore(combineReducers({
        product:productReducer,
        wish:wishReducer
    }));
    return store;
}

export default configureStore;