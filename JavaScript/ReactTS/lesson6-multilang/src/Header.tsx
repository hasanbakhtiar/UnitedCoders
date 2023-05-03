import React, { useContext, useState } from 'react'
import { ProductContext } from './context/ProductContext'
import { productaz, producten } from './data/products';

const Header = () => {
    const [data,setData] = useContext(ProductContext);
    const [lang,setLang] = useState(localStorage.getItem('lang'));
  return (
    <div>
        <button onClick={()=>{
             lang === 'az' ? setLang('en') :setLang('az');
             lang === 'az' ? setData(producten) :setData(productaz);
             
             lang === 'az' ? localStorage.setItem('lang','en') :localStorage.setItem('lang','az');
        }}>{lang ==='az'? "English":"Azerbaijani"}</button>
    </div>
  )
}

export default Header