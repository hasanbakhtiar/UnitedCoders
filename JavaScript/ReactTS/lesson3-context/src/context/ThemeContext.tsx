import { createContext, useContext, useState } from "react";

interface propType{
    children:any
}
export const ThemeContext = createContext<any>([]);

export const ThemeProvider = (props:propType) =>{
    const localMode =  localStorage.getItem('mode'); 
         
    const [mode,setMode] = useState<any>(localMode);

    return(
        <ThemeContext.Provider value={[mode,setMode]}>{props.children}</ThemeContext.Provider>
    )
}