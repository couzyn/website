import * as React from "react"
import globalStyles from '../styles/global.scss'
import { Children } from "react"


const Layout = ({children}) => {

//
    return (
        <div className="layoutContainer">
        <header>
            <div className = "burger"/>

        </header>

        <main>
         {children}
         </main>

        <footer>
        Impressum 
        </footer>
        </div>
    )


}

export default Layout