import "./Navigation.css";
import React, { useEffect, useRef, useState } from "react";

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="#">News Website</a>
      <div className="dropdown" ref={dropdownRef}>
        <a href="#" onClick={toggleDropdown}>
          Sections
        </a>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="#">World</a>
            <a href="#">Tech</a>
            <a href="#">Sports</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
