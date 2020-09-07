import React from 'react';
import styled from 'styled-components';

const Project = () => {
  return (
    <Content>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="card-header">
              <h3>
                <span>
                  <i class="fab fa-youtube"></i>YOU
                </span>
                FLIX
              </h3>
            </div>
            <div className="content">
              <p className="about">Some text</p>
              <p>Some text</p>
            </div>
            <div className="btn-group">
              <span className="btn-card">
                <i class="fas fa-globe"></i> Demo
              </span>
              <span className="btn-card">
                <i class="fas fa-code"></i> Code
              </span>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="card-header">
              <h3>
                <span>
                  <i class="fab fa-youtube"></i>YOU
                </span>
                FLIX
              </h3>
            </div>

            <div className="content">
              <p className="about">Some text</p>
              <p>Some text</p>
            </div>
            <div>
              <span className="btn-card">
                <i class="fas fa-globe"></i> Demo
              </span>
              <span className="btn-card">
                <i class="fas fa-code"></i> Code
              </span>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="card-header">
              <h2>
                <span>
                  <i class="fab fa-youtube"></i>YOU
                </span>
                FLIX
              </h2>
            </div>
            <br></br>
            <hr />
            <div className="content">
              <p className="about">
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
              <p>For hosting, AWS's EC2 service is used.</p>
            </div>
            <div className="label-group">
              <p>React</p>
              <p>CSS</p>
              <p>HTML</p>
              <p>AWS</p>
              <p>EC2</p>
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
      </div>
    </Content>
  );
};

const Content = styled.div`
  p {
    margin: 0.5rem;
    font-size: 1.2rem;
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

    .card-header {
      margin-top: 0.5rem;
      text-align: center;
      span {
        color: red;
      }
    }

    .content {
      margin-top: 1rem;
      text-align: left;

      .about {
        color: #303030;
      }
    }

    .label-group {
      margin-top: 20px;
      text-align: left;

      p {
        display: inline-block;
        color: #fff;
        background-color: #808080;
        padding: 5px;
        border-radius: 15px;
        margin-right: -2px;
        /* margin-left: -3px; */

        /* &:first-child {
          margin-left: 8px;
        } */

        &:hover {
          filter: brightness(120%);
        }
      }
    }

    .btn-group {
      margin-top: 10px;
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
    border: 1px solid;
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
