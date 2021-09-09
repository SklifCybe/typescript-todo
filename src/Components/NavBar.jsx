import React from 'react';
import {NavLink} from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <nav className="blue accent-2">
      <div className="nav-wrapper mr">
        <NavLink to="/" className="brand-logo">Todo</NavLink>
        <ul className="right hide-on-med-and-down">
          <li className="mr">
            <NavLink to="/list">Список дел</NavLink>
          </li>
          <li>
            <NavLink to="/about">Информация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};