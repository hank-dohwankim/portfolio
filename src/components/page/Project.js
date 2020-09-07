import React from 'react';
import styled from 'styled-components';

const Project = () => {
  return (
    <Content>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="card-header">
              <h2>
                <span className="color-portfolio">
                  <i className="fas fa-user-astronaut"></i> HANK's
                </span>
                <span> PORTFOLIO</span>
              </h2>
            </div>
            <br></br>
            <hr />
            <div className="content">
              <p className="content-title">
                <h3>Skills</h3>
              </p>
              <div className="label-group">
                <p>React</p>
                <p>Sass</p>
                <p>HTML</p>
                <p>Javascript</p>
                <p>SPA</p>
                <p>Responsive UI / UX</p>
              </div>
              <hr></hr>
              <p className="content-title">
                <h3>About</h3>
              </p>
              <p>
                I made a Single Page Application using React and
                react-router-dom.
              </p>
              <p>
                UI is managed within individual components using Scss and
                styled-component.
              </p>
              <p>
                I have tried to build a simple and clean homepage in terms of
                practical application design and user-friendly inteface.
              </p>
            </div>

            <div className="btn-group">
              <span className="btn-card">
                <i class="fas fa-globe"></i> Demo
              </span>
              <span className="btn-card">
                <i className="fas fa-code"></i> Code
              </span>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="card-header">
              <h2>
                <span className="color-youtube">
                  <i class="fab fa-youtube"></i>YOU
                </span>
                FLIX
              </h2>
            </div>
            <br></br>
            <hr />
            <div className="content">
              <p className="content-title">
                <h3>Skills</h3>
              </p>
              <div className="label-group">
                <p>React</p>
                <p>CSS</p>
                <p>HTML</p>
                <p>AWS</p>
                <p>EC2</p>
              </div>
              <br></br>
              <br></br>
              <hr></hr>
              <p className="content-title">
                <h3>About</h3>
              </p>
              <p>
                I planned a pilot project that utilizes 'React' and
                'react-router-dom'.
              </p>
              <p>
                I developed a website in the form of Netflix using the Youtube
                API.
              </p>
              <p>AWS's EC2 service is used For hosting.</p>
            </div>

            <div className="btn-group">
              <span className="btn-card">
                <a
                  href="http://youflix2.s3-website.ca-central-1.amazonaws.com/"
                  target="_blank"
                >
                  <i class="fas fa-globe"></i> Demo
                </a>
              </span>
              <span className="btn-card">
                <a
                  href="https://github.com/hank-dohwankim/YouFlix-React-AWS-EC2"
                  target="_blank"
                >
                  <i className="fas fa-code"></i> Code
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-header">
              <h2>Sample</h2>
            </div>
            <br></br>
            <hr />
            <div className="content">
              <p className="content-title">
                <h3>Skills</h3>
              </p>
              <div className="label-group">
                <p>React</p>
                <p>CSS</p>
                <p>HTML</p>
                <p>AWS</p>
                <p>EC2</p>
              </div>
              <br></br>
              <br></br>
              <hr></hr>
              <p className="content-title">
                <h3>About</h3>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                reiciendis animi beatae commodi sit quia consectetur odio
                voluptate magnam laudantium. Adipisci, consectetur? Deserunt,
                sed? Maiores deleniti saepe magnam quo vero!
              </p>
            </div>

            <div className="btn-group">
              <span className="btn-card">
                <a
                  href="http://youflix2.s3-website.ca-central-1.amazonaws.com/"
                  target="_blank"
                >
                  <i class="fas fa-globe"></i> Demo
                </a>
              </span>
              <span className="btn-card">
                <a
                  href="https://github.com/hank-dohwankim/YouFlix-React-AWS-EC2"
                  target="_blank"
                >
                  <i className="fas fa-code"></i> Code
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

const Content = styled.div`
  a {
    color: #fff;
  }

  p {
    margin: 0.5rem;
    font-size: 1.2rem;
  }

  .color-portfolio {
    color: #57b228;
  }

  .color-youtube {
    color: red;
  }

  .row {
    margin: 2rem 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media only screen and (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media all and (max-width: 625px) {
      grid-template-columns: repeat(1, 1fr);
    }

    grid-gap: 1rem;
  }

  /* .column {
    float: left;
    width: 25%;
  }

  /* Clear floats after the columns */
  .row:after {
    content: '';
    display: table;
    clear: both;
  }

  /* Style the counter cards */
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
    padding: 16px;
    text-align: center;
    background-color: #f1f1f1;
    transition: all 0.2s ease-in-out;
    border-radius: 2px;
    height: 35rem;

    .card-header {
      margin-top: 0.5rem;
      text-align: center;
    }

    .content {
      margin-top: 1rem;
      text-align: left;

      .content-title {
        color: #303030;
      }
    }

    .label-group {
      text-align: left;
      margin-bottom: 0.5rem;
      p {
        display: inline-block;
        color: #fff;
        background-color: #808080;
        padding: 5px;
        border-radius: 15px;
        margin-right: -2px;
        margin-top: 0;

        /* &:hover {
          filter: brightness(120%);
        } */
      }
    }

    .btn-group {
      position: absolute;
      right: 1rem;
      top: 90%;
    }
  }

  .card:hover {
    transform: translate(0, -3px);

    & .btn-card {
      visibility: visible;
      cursor: pointer;

      &:hover {
        filter: brightness(110%);
      }
    }
  }

  .btn-card {
    visibility: hidden;
    margin: 0 5px;
    display: inline-block;
    border: 1px solid #57b228;
    border-radius: 4px;
    padding: 5px 10px;
    text-transform: uppercase;
    color: #fff;
    background-color: #57b228;
  }

  /* Responsive columns - one column layout (vertical) on small screens */
  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }
`;

export default Project;
