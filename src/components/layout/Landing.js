import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Styled from 'styled-components';

const Landing = () => {
  return (
    <Content>
      <h2>
        I <span>A</span>m <abbr>&#123;</abbr> HANK KIM <abbr>&#125;</abbr> The
      </h2>
      <br />
      <h2>
        {' '}
        <Typewriter
          options={{
            strings: [
              'Full Stack Developer',
              'Programming Tutor',
              'E-Commerce Savvy',
              'POS System expert',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <Link to="/project">
        <button className="btn-light">View Projects</button>
      </Link>
    </Content>
  );
};

const Content = Styled.div`
  color: white;
  text-align : center;
  padding-top :10%;
  font-size: 2rem;

  span {
    font-size: 3.5rem;
  }

  abbr {
    color:#50bcdf;
  }

  h1 {
    font-size: 5rem;
    @media only screen and (max-width: 900px) {
      font-size: 3rem;
    }

    @media only screen and (max-width: 520px) {
      font-size: 1.5rem;
    }
  }
  h2 { 
    font-size : 4.5rem;
    @media only screen and (max-width: 900px) {
      font-size: 2.5rem;
    }
    @media only screen and (max-width: 520px) {
      font-size: 1.25rem;
    }
  }

  .btn-light {
      margin: 3rem;
      font-size: 1.5rem;
      border-radius : 2px;
      background:#57b228;
      color: white;

      &:hover {
        letter-spacing : 2px;
        transform:scale(1.2);
        filter: brightness(120%);
      }

      @media only screen and (max-width: 700px) {
        font-size: 1rem;
      }
    }
  }
`;

export default Landing;
