import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="left">Digivista</div>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Menu */}
      <div className={`right ${open ? "show" : ""}`}>
        <div className="items">About Us</div>
        <div className="items">Services</div>
        <div className="items">Use Cases</div>
        <div className="items">Pricing</div>
        <div className="items">Blog</div>
        <div className="items bo">Request a quote</div>
      </div>
    </header>
  );
};

export default Navbar;
