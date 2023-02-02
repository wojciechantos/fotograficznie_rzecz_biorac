import React, { useState } from "react";
import { Header, Navbar as NavbarBase, Drawer } from "@mantine/core";
import { Link } from "gatsby";
import { Flex } from "@mantine/core";
import { Container } from "./Container";

import github from "../img/github-icon.svg";
import logo from "../img/logo.png";

const Navbar = ({ onBurgerClick }) => {
  const [isActive, setIsActive] = useState(false);

  const menu = () => {
    return (
      <Link className="navbar-item" to="/about">
        About
      </Link>
    );
  };

  return (
    <>
      <Header fixed withBorder={false}>
        <Container>
          <NavbarBase>
            {/*<div className="navbar-brand">*/}
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logo}
                alt="Kaldi"
                style={{ width: "104px", height: "79px" }}
              />
            </Link>
            {/* Hamburger menu */}
            <button
              className={`navbar-burger burger ${isActive && "is-active"}`}
              aria-expanded={isActive}
              onClick={onBurgerClick}
            >
              <span />
              <span />
              <span />
            </button>
            {/*</div>*/}
            {/*<ul*/}
            {/*  id="navMenu"*/}
            {/*  className={` navbar-start has-text-centered navbar-menu ${*/}
            {/*    isActive && "is-active"*/}
            {/*  }`}*/}
            {/*>*/}
            <Flex gap="xl">
              {/*<li className="navbar-item" style={{ padding: "0px" }}>*/}
              <Link className="navbar-item" to="/about">
                About
              </Link>
              {/*</li>*/}
              {/*<li className="navbar-item" style={{ padding: "0px" }}>*/}
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              {/*</li>*/}
              {/*<li className="navbar-item" style={{ padding: "0px" }}>*/}
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              {/*</li>*/}
              {/*<li className="navbar-item" style={{ padding: "0px" }}>*/}
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              {/*</li>*/}
              {/*<li className="navbar-item" style={{ padding: "0px" }}>*/}
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
              {/*</li>*/}
            </Flex>
            {/*</ul>*/}
          </NavbarBase>
        </Container>
      </Header>
    </>
  );
};

export default Navbar;
