import React from 'react';
import {NavLink} from 'react-router-dom';


import style from './Navigation.module.css';

const Navigation = (props) => (

  <ul className={style.navbar}>
    <li className={style.navbarItem}>
      <NavLink to='/' exact
        className={style.navLink} 
        activeClassName={style.navLinkActive}>Home
      </NavLink>
    </li>
    <li className={style.navbarItem}>
      <NavLink to='/movies'
        className={style.navLink} 
        activeClassName={style.navLinkActive}>Movies
      </NavLink>
    </li>
  </ul>

);
export default Navigation;