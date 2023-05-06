import { v4 as uuid } from 'uuid';
export const addBlog = ({title,desc,photo}:any)=>({
  type:"ADD_BLOG",
  blog:{
    id:uuid(),
    title,
    desc,
    photo
  }
})


export const editBlog = (id:string,update:any)=>({
    type:"EDIT_BLOG",
    id,
    update
})

export const removeBlog =({id}:any)=>({
    type:"REMOVE_BLOG",
    id
})
