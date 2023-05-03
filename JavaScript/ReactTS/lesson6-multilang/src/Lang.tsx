import { useState } from "react"
import { Button, Container } from "react-bootstrap"
import { productaz,producten } from "./data/products";
const Lang = () => {
  const [lang,setLang] = useState(localStorage.getItem('lang'));
  return (
    <Container className=" mt-5">
      
      <Button variant="primary" onClick={()=>{

        lang === 'az' ? setLang('en') :setLang('az');
        lang === 'az' ? localStorage.setItem('lang','en') :localStorage.setItem('lang','az');
        
      }}>{lang ==='az'? "English":"Azerbaijani"}</Button>
      <ol>
      {lang==='az'? productaz.map(i=> <li>{i.title}</li>): producten.map(i=>  <li>{i.title}</li>)}
      </ol>
    </Container>
  )
}

export default Lang