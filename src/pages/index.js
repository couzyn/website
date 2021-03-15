import * as React from "react"
import Layout from "../components/layout.js"
import '../styles/start.scss'
import Logo from '../img/cmnczyn.svg'



const IndexPage = () => {
  return (
    <Layout>
      <div className ="startContent">
        <div className = "logoContainer">
          <div className = "logo">
          <img src = {Logo} alt ="cmnczn" style = {{width: "96%"}}/>
          <h1 className = "logoTitle">Carmen CØuzyn</h1>  
          <h2 className = "logoSubtitle">Design & Development</h2>       
          </div>
           </div>
          <div className = "linksContainer">
            <div className = "link firstLink">01 - About</div>
            <div className = "link">02 - Résumé</div>
            <div className = "link">03 - Portfolio</div>
        </div>

      </div>

    </Layout>
  )
}

export default IndexPage
