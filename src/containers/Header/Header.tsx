import React, {useRef, useEffect, useState} from "react";

import Button from "components/Button/Button";
import Logo from "components/Logo/Logo";
import Link from "components/Link/Link";
import Cart from "containers/Cart/Cart";
import MobileMenuIcon from "icons/MobileMenuIcon";
import ProfileHeaderIcon from "icons/ProfileHeaderIcon";
import CartIcon from "icons/CartIcon";

import "./Header.scss";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const buttonClick = () => {}
  const navRef = useRef<HTMLElement>(null)
  const [headerBackgrounded, setHeaderBackgrounded] = useState("")
  const [cartMenu, setCartMenu] = useState(false)

  const toggleCartMenu = () => {
    setCartMenu(!cartMenu)
  }

  const scrollHandler = () => {
    if (window.scrollY > 100) {
      setHeaderBackgrounded("scrolled")
    } else {
      setHeaderBackgrounded("")
    }
  }
  
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  const openMobileMenu = () => {
    navRef.current?.classList.toggle("mobile-menu")
  }

  return (
    <header className={`app-header ${headerBackgrounded}`}>
      <div className="app-header__mobile-menu-icon" onClick={openMobileMenu}>
        <MobileMenuIcon />
      </div>
      <div className="app-header__logo">
        <Logo />
      </div>
      <div className="app-header__right-column">
        <nav className="app-header__right-column__navigation" ref={navRef}>
          <ul>
            <li>
              <Link to="">Նորություններ</Link>
            </li>
            <li>
              <Link to="">Մեր մասին</Link>
            </li>
            <div className="app-header__right-column__navigation__mobile-column">
              <li>
                <Link to="">Մուտք</Link>
              </li>
              <li>
                <Link to="">Անձնական էջ</Link>
              </li>
            </div>
          </ul>
        </nav>
        <div className="app-header__right-column__profile-header-icon">
          <ProfileHeaderIcon />
        </div>
        <div
          className="app-header__right-column__cart-icon"
          onClick={toggleCartMenu}
        >
          <CartIcon />
        </div>
        <Button
          className="app-header__right-column__button"
          onClick={buttonClick}
        >
          Մուտք
        </Button>
      </div>
      {cartMenu && (
        <Cart closeCartMenu={toggleCartMenu} />
      )}
    </header>
  )
}

export default Header;