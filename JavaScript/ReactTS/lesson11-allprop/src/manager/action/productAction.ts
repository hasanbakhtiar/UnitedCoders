import { productTypes } from "../../config";

export const addproduct = ({titleaz,titleen,price,photo,stock}:productTypes)=>({
    type:"ADD_PRODUCT",
    product:{
        id:crypto.randomUUID(),titleaz,titleen,price,photo,stock
    }
})

export const removeProduct =({id}:any)=>({
    type:"REMOVE_PRODUCT",
    id
})
