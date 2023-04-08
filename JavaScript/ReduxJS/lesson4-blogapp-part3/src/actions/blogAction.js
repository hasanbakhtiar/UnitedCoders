import { v4 as uuid } from 'uuid';
export const addBlog = ({title,desc,photo})=>({
  type:"ADD_BLOG",
  blog:{
    id:uuid(),
    title,
    desc,
    photo
  }
})


export const editBlog = (id,update)=>({
    type:"EDIT_BLOG",
    id,
    update
})

export const removeBlog =({id})=>({
    type:"REMOVE_BLOG",
    id
})
