import React from "react"
import { NavLink } from "react-router-dom"

import style from "./Navigation.module.css"

const Navigation = () => (
  <ul className={style.nav}>
    <li className={style.navItem}>
      <NavLink to="/" exact className={style.navLink} activeClassName={style.navLinkActive}>
        Home
      </NavLink>
    </li>
    <li className={style.navItem}>
      <NavLink to="/movie" className={style.navLink} activeClassName={style.navLinkActive}>
        Movies
      </NavLink>
    </li>
  </ul>
)
export default Navigation
