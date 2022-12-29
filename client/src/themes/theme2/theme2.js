import { useContext } from "react"
import { ThemeContext } from "../context_theme"
import { Layout } from "./components/layout"
import { NavBar } from "./components/navbar"
export const Theme2 = ()=>{
    const item = useContext(ThemeContext)
    return (
        <>
            <NavBar />
            <Layout />

        </>
    )
}