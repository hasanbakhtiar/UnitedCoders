import { productTypes } from "../../config";

export const addproduct = ({id,title,price,photo,stock}:productTypes)=>({
    type:"ADD_PRODUCT",
    product:{
        id,title,price,photo,stock
    }
})

