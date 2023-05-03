import React, { useState } from 'react'
import { createContext } from 'react';
import { productaz, producten } from '../data/products';

export const ProductContext = createContext<any>(null);

export const ProductProvider = ({children}:any) => {
    const [data,setData] = useState<any[]>(localStorage.getItem('lang')==='az'? productaz:producten); 
  return (
        <ProductContext.Provider value={[data,setData]}>{children}</ProductContext.Provider>
  )
}
