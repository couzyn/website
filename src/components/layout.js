import * as React from "react"
import '../styles/global.scss'
import '../styles/fonts.css'
import BurgerMenu from './burger.js'


const Layout = ({children}) => {

//
    return (
        <div className="layoutContainer">
        <header>
           <BurgerMenu/>
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