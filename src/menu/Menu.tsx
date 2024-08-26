// Menu.tsx
import React from "react";
import "./Menu.css";

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#cv">CV</a>
        </li>
        <li className="menu-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="menu-item">
          <a href="#art">Art</a>
          <ul className="submenu">
            <li className="submenu-item">
              <a href="#shader">Shader</a>
            </li>
            <li className="submenu-item">
              <a href="#design">Design</a>
            </li>
            <li className="submenu-item">
              <a href="#textile">Textile</a>
            </li>
            <li className="submenu-item">
              <a href="#mapping">Mapping</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
