import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <div className="container">
      <div>
        <Nav>
          <div className="logo">
            <a href="index.html">
              <i className="fas fa-user-astronaut fa-3x"></i>
              <h1>
                <p>Hank Kim</p>
                <span>Full Stack Developer</span>
              </h1>
            </a>
          </div>
          <ul>
            <li>
              <a className="current" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="work.html">project</a>
            </li>
            {/* <li>
              <a href="contact.html">Contact</a>
            </li> */}
          </ul>
        </Nav>
      </div>
    </div>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  padding: 0 20px;
  background-color: #303030;

  & span {
    color: #57b228;
    font-size: 0.9rem;
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

  & a:hover {
    border-color: #ccc;
  }

  & a.current {
    border-color: #57b228;
  }

  & i {
    margin: auto;
    margin-right: 10px;
    padding: 0;
  }
  & ul {
    display: flex;

    > li {
      padding: 1rem 1.5rem;
    }
  }
`;

export default Navbar;
