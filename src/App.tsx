import React from "react"

import Layout from 'components/Layout/Layout';
import Header from 'containers/Header/Header';
import Routes from "Routes"

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Layout>
        <Routes />
      </Layout>
    </div>
  )
}

export default App
