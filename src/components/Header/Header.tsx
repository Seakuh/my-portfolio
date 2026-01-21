import React, { useState } from "react";
import "./Header.css";

const menuItems = [
  { id: "hero", label: "Home" },
  { id: "Projects", label: "Projects" },
  { id: "github-repositories", label: "Repositories" },
  { id: "blog-posts", label: "Blog" },
  { id: "passions", label: "Passions" },
  { id: "frequency-overview", label: "Frequencies" },
  { id: "timeline", label: "Timeline" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-logo" onClick={() => scrollTo("hero")}>
          Portfolio
        </div>
        <ul className={`header-menu ${isOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => scrollTo(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>
        <button
          className="header-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
