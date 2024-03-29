import React, { useState, useEffect } from "react";
import styled from "styled-components";
import theYard from "../../assets/TheYard.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  return (
    <>
      <Nav>
        <div className="brand">
          <img src={theYard} alt="Icon" />
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <ul className="links">
          <li>
            <a href="/#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/#services">Our Services</a>
          </li>
          <li>
            <a href="/#products">Products</a>
          </li>
          <li>
            <a href="/#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="/ordernow">ORDER NOW</a>
          </li>
          <li>
            <a href="/cart">CART</a>
          </li>
        </ul>
      </Nav>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
            <a
              href="/#home"
              className="active"
              onClick={() => setNavbarState(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a href="/#services" onClick={() => setNavbarState(false)}>
              Our Services
            </a>
          </li>
          <li>
            <a href="/#products" onClick={() => setNavbarState(false)}>
              Products
            </a>
          </li>
          <li>
            <a href="/#testimonials" onClick={() => setNavbarState(false)}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="/ordernow" onClick={() => setNavbarState(false)}>
              ORDER NOW
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  .brand {
    img {
      margin-top: 1rem;
      height: 126px;
      width: 170px;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color: #81b622;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #3d550c;
        }
      }
      .active {
        color: #3d550c;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
  }
`;
const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #81b622;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #3d550c;
        }
      }
      &:first-of-type {
        a {
          color: #3d550c;
          font-weight: 900;
        }
      }
    }
  }
`;
