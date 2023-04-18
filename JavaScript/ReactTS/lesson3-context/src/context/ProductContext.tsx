import axios from "axios";
import { createContext, useEffect, useState } from "react";
interface propType{
  children:any[]
}

export const ProductContext = createContext<any>(null);

export const ProductProvider = (props:propType)=>{
  const [products,setProducts] = useState<any[]>([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res:any)=>{setProducts(res.data)})
  },[])
  

  return(
    <ProductContext.Provider value={[products,setProducts]}>
      {props.children}
    </ProductContext.Provider>
  )
  
  
}