import { productTypes } from "../../config";

export const addWish=({titleaz,titleen,price,photo,stock}:productTypes)=>({
        type:"ADD_WISH",
        wish:{
            id:crypto.randomUUID(),titleaz,titleen,price,photo,stock
        }
})

export const removeWish =({id}:any)=>({
    type:"REMOVE_WISH",
    id
})