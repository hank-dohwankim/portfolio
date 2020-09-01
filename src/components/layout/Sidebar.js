import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SideMenu>
      <div id="linkedin">
        LINKED IN <i className="fab fa-linkedin"></i>
      </div>
      <div id="github">
        GITHUB<i className="fab fa-github"></i>
      </div>
      <div id="resume">
        RESUME<i className="fas fa-file-alt"></i>
      </div>
      <div id="email">
        CONTACT<i className="fas fa-envelope"></i>
      </div>
    </SideMenu>
  );
};

const SideMenu = styled.div`
  div {
    margin-top: 15%;
    position: absolute;
    left: -120px;
    transition: 0.3s;
    padding: 15px;
    width: 150px;
    text-decoration: none;
    font-size: 20px;
    color: white;
    border-radius: 0 5px 5px 0;

    > i {
      position: relative;
      right: -20px;
    }

    &:hover {
      left: 0;
    }

    &#linkedin {
      top: 20px;
      background-color: #0e76a8;
    }

    &#email {
      top: 200px;
      background-color: #57b228;
      > i {
        position: relative;
        right: -28.5px;
      }
    }
    &#resume {
      top: 140px;
      background-color: red;
      > i {
        position: relative;
        right: -40px;
      }
    }
    &#github {
      top: 80px;
      background-color: #000;
      > i {
        position: relative;
        right: -47.5px;
      }
    }
  }
`;

export default Sidebar;
