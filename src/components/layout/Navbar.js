import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  function selectMenu() {
    document.getElementById('toggler').checked = false;
  }


  return (
    <div className="container">
      <Nav>
        <div className="logo">
          <Link to="/portfolio">
            <i className="fas fa-user-astronaut fa-3x"></i>
            <h1>
              <p>Hank Kim</p>
              <div className="underbar"></div>
              <label>Full Stack Developer</label>
            </h1>
          </Link>
        </div>
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" id="toggler" />
          <div className="hamburger">
            <div></div>
          </div>

          <div className="menu">
            <div>
              <div>
                <ul>
                  <li onClick={() => selectMenu()}>
                    <Link to="/portfolio">H o m e</Link>
                  </li>
                  {/* <li onClick={() => selectMenu()}>
                    <Link to="/about">
                      <span>A b o u t</span>
                    </Link>
                  </li> */}
                  <li onClick={() => selectMenu()}>
                    <Link to="/project">project</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Nav>
    </div>
  );
};

const Nav = styled.nav`
  .logo {
    z-index: 1;
    transition: all 0.3s ease-in-out;
    @media only screen and (max-width: 520px) {
      transform: scale(0.85);
    }
  }

  .underbar {
    background-color: #fff;
    height: 1.5px;
    width: 96%;
    position: relative;
    top: 6px;
  }

  .logo:hover {
    @media only screen and (min-width: 900px) {
      transform: scale(1.1);
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  padding: 0 20px;
  background-color: #303030;

  & label {
    color: #57b228;
    font-size: 0.9rem;
    cursor: pointer;
  }

  & p {
    letter-spacing: 8.5px;
    margin-bottom: -5px;
  }

  & a {
    display: flex;
    text-decoration: none;
    color: #f4f4f4;
    text-transform: uppercase;
    border-bottom: 3px transparent solid;
    padding-bottom: 0.2rem;
    transition: border-color 0.5s;
  }

  & a.current {
    border-color: #57b228;
  }

  & i {
    margin: auto;
    margin-right: 10px;
    padding: 0;
  }

  & .menu-wrap {
    position: fixed;
    margin: 0 1rem;
    top: 0;
    right: 0;
    z-index: 1;

    & .toggler {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      cursor: pointer;
      width: 70px;
      height: 70px;
      opacity: 0;
    }

    /* Show menu */
    & .toggler:checked ~ .menu {
      visibility: visible;
      > div {
        transform: scale(1);
        transition-duration: 0.5s;
        > div {
          opacity: 1;
          transition: opacity 0.4s ease;
        }
      }
    }

    & .hamburger {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: 40px;
      height: 40px;
      padding: 1rem;
      background: #303030;
      display: flex;
      align-items: center;
      justify-content: center;
      @media only screen and (max-width: 520px) {
        transform: scale(0.8);
      }

      > div {
        position: relative;
        width: 100%;
        height: 2px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;
      }

      /* Top and bottom lines */
      & > div:before,
      & > div:after {
        content: '';
        position: absolute;
        z-index: 1;
        top: -10px;
        width: 100%;
        height: 2px;
        background: inherit;
      }

      /* Moves line down */
      & > div:after {
        top: 10px;
      }
    }

    /* Toggler animate */
    & .toggler:checked + .hamburger > div {
      transform: rotate(135deg);
    }
    /* Turn lines into X */
    & .toggler:checked + .hamburger > div:before,
    & .toggler:checked + .hamburger > div:after {
      top: 0;
      transform: rotate(90deg);
    }

    & .toggler:hover + .hamburger > div {
      transform: rotate(180deg);
    }

    /* Rotate on hover when checked */
    & .toggler:checked:hover + .hamburger > div {
      transform: rotate(315deg);
    }

    & .menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      visibility: hidden;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      > div {
        background: rgba(0, 0, 0, 0.9);
        border-radius: 50%;
        width: 200vw;
        height: 200vw;
        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        transition: all 0.4s ease;

        > div {
          /* text-align: center; */
          max-width: 90vw;
          max-height: 100vh;
          opacity: 0;
          transition: opacity 0.4s ease;
          & ul {
            > li {
              font-size: 2rem;
              padding: 1rem;

              a {
                padding: 3rem;
                transition: 0.4s ease;
              }
              & a:hover {
                background-color: #303030;
              }
            }
          }
        }
      }
    }
  }
`;

export default Navbar;
