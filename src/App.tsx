import React from "react"

import Header from "./containers/Header/Header"
import Footer from './containers/Footer/Footer'
import Routes from './Routes'

const App = () => {
  return <div>
    <Header/>
    <Routes/>
    <Footer/>
  </div>
}

export default App
