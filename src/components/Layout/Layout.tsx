import React from "react";

import Footer from "containers/Footer/Footer";

import "./Layout.scss";

interface ILayoutProps { }

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <div className="app-layout__main">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
