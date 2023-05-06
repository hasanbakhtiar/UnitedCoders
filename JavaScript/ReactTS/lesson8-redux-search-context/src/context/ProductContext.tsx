import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext<any>(null);


export const ProductProvider=({children}:any)=>{
        const [productData,setProductData] = useState([]);
        useEffect(()=>{
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(item=>setProductData(item))
        },[])
   
        return <ProductContext.Provider value={[productData,setProductData]}>{children}</ProductContext.Provider>
}