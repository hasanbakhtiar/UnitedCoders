import { createContext, useState } from "react";

export const LangContext = createContext<any>(null);

export const LangProvider = ({children}:any)=>{
    const [lang,setLang] = useState('en');
    return <LangContext.Provider value={[lang,setLang]}>{children}</LangContext.Provider>
}

