import { Link } from "react-router-dom"
import { useApp } from "../contexts/context.js"

import "../styles/Navigation.css"

function Navigation() {
  //   let { authToken } = useAuth()
  return (
    <div className="NavigateMenu">
      <div className="menu__wrapper">
        <div className="nav">
          <div className="logo">
            <Link to="/" className="logo__text">
              Layonix
            </Link>
          </div>
          <div className="nav__menu">
            <Link to="/" className="nav__item">
              Главная
            </Link>
            <Link to="/main" className="nav__item btn-friends-popup">
              Объявления
            </Link>
            <Link to="/" className="nav__item">
              О нас
            </Link>
          </div>
          <div className="burger-menu">
            <div id="menu" className="burger-slide">
              <Link to="/welcome" className="nav__item">
                О нас
              </Link>
              <Link to="/shop" className="nav__item btn-friends-popup">
                Магазин
              </Link>
              <Link to="/rules-info" className="nav__item">
                Правила проекта
              </Link>
            </div>
            <button id="burger" className="burger-menu__button">
              <p className="burger__line"></p>
              <p className="burger__line"></p>
              <p className="burger__line"></p>
            </button>
          </div>
          {/* {authToken ? (
            <Link className="account" to="/resort">
              <p className="account__text">Развлечения</p>
            </Link>
          ) : ( */}
          <Link className="account" to="/login">
            <p className="account__text">Войти</p>
          </Link>
          {/* )} */}
        </div>
      </div>
    </div>
  )
}

export default Navigation
