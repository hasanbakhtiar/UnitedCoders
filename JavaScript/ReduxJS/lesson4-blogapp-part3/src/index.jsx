import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { addBlog, editBlog, removeBlog } from './actions/blogAction';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import App from './App';
import { Provider } from 'react-redux';
const mystore = configureStore();



mystore.subscribe(()=>{
  console.log(mystore.getState());
});

const blog1 = mystore.dispatch(addBlog({title:"Tree",desc:"tree desc",photo:"tree-photo"}));
const blog2 = mystore.dispatch(addBlog({title:"flower",desc:'flower desc',photo:'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}))


mystore.dispatch(editBlog(blog1.blog.id,{title:"update",desc:"update desc",photo:"https://www.thespruce.com/thmb/ClRANI4jTWhkGeNhvJtArRhlGSA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg"}))
// mystore.dispatch(removeBlog({id:blog2.blog.id}))




console.log(blog1.blog.id);








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={mystore}>
      <App/>
      </Provider>
  </React.StrictMode>
);


