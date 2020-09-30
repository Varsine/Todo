import React from "react"
import {Link} from "@reach/router"

import "./Layout.scss"

interface ILayoutProps {}

const Layout: React.FC<ILayoutProps> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="">Նորություններ</Link>
        </li>
        <li>
          <Link to="">Մեր մասին</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Layout
