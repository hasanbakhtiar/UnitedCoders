import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import blogReducer from '../reducers/blogReducer';

const configureStore = () => {
    const store = createStore(
       blogReducer,
        compose(applyMiddleware(thunk))
    );
    return store;
}
export default configureStore;