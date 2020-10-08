import React, {useRef} from "react";

import CartIcon from "icons/CartIcon";
import Button from "components/Button/Button";
import Logo from "components/Logo/Logo";
import ProfileHeaderIcon from "icons/ProfileHeaderIcon";
import Link from "components/Link/Link";
import MobileMenuIcon from "icons/MobileMenuIcon";

import "./Header.scss";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const buttonClick = () => {}
  const headRef = useRef<HTMLHeadElement>(null)
  const navRef = useRef<HTMLElement>(null)

  const handlerScroll = () => {
    if (headRef.current) {
      if (window.scrollY > 100) {
        headRef.current.classList.add("scrolled")
      } else {
        headRef.current.classList.remove("scrolled")
      }
    }
  }
  window.addEventListener("scroll", handlerScroll)

  const openMobileMenu = () => {
    navRef.current?.classList.toggle("mobile-menu")
  }
  
  return (
    <header className="app-header" ref={headRef}>
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
        <div className="app-header__right-column__cart-icon">
          <CartIcon />
        </div>
        <Button
          className="app-header__right-column__button"
          onClick={buttonClick}
        >
          Մուտք
        </Button>
      </div>
    </header>
  )
}

export default Header;