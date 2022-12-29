import { Theme1 } from "./theme1/theme1"
import { Theme2 } from "./theme2/theme2"
import { useContext } from "react"
import { ThemeContext } from "./context_theme"
import { Loading } from "./components/loading"

export const MainTheme = ()=>{
    const item = useContext(ThemeContext)
    if(item.themeid === 1){
        return <Theme1/>
      }else if(item.themeid === 2){
        return <Theme2/>
        //return <Loading/>
      }else if(item == null){
          return <>Sorry No User Found</>
      }else{
        return<Loading/>
      }
}