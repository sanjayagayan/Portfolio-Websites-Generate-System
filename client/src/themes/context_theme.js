import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { createContext } from "react"
import { MainTheme } from "./main_theme"

export const ThemeContext = createContext()

export const ContextTheme = ()=>{
    const [item, setItem] = useState([]);
    const params = useParams()
    const id = params.userId
    
    useEffect(()=>{
        fetch(`http://localhost:5000/api/users/${id}`)
        .then(res => res.json())
        .then((result)=>{
            setItem(result)
            console.log(result.themeid)
        })
    },[])
   return(
    <ThemeContext.Provider value={item}>
        <MainTheme/>
    </ThemeContext.Provider>
   )
  

}