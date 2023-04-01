import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { v4 as uuid } from 'uuid';
const addBlog = ({title,desc,photo})=>({
  type:"ADD_BLOG",
  blog:{
    id:uuid(),
    title,
    desc,
    photo
  }
})



const blogState = [];

const blogReducer =(state=blogState,action)=>{
      switch(action.type){
        case "ADD_BLOG":
          return [...state,action.blog];
        
        default:
          return state;
      }
}

const store= createStore(blogReducer);

store.subscribe(()=>{
  console.log(store.getState());
});

const blog1 = store.dispatch(addBlog({title:"Blog One",desc:"desc one",photo:"img one"}))
store.dispatch(addBlog({title:"Blog two",desc:"desc two",photo:"img two"}))

console.log(blog1.blog.id);








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <h1>Blog App</h1>
  </React.StrictMode>
);


