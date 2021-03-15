import * as React from "react"
import Layout from "../components/layout.js"
import '../styles/start.scss'



const IndexPage = () => {
  return (
    <Layout>
      <div className ="startContent">
        <div className = "logoContainer">
          <h1 className = "logoTitle">Carmen CØuzyn</h1>         
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
