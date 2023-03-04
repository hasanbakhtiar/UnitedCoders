import axios from "axios";
import { createContext,useEffect,useState } from "react";


export const ProductContext = createContext();

export const ProductProvider = props=>{
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setProducts(res.data))
    },[])

    return(
        <ProductContext.Provider value={[products,setProducts]}>
                {props.children}
        </ProductContext.Provider>
    )
    
}