import React from 'react';
import { Link } from 'react-router-dom';
import TypingEffect from 'react-typewriter-effect';
import Styled from 'styled-components';

const Landing = () => {
  return (
    <Content>
      <h2 className="header">
        I Am <abbr>&#123;</abbr> HANK KIM <abbr>&#125;</abbr> The
      </h2>
      <br />
      <div className="typewriter">
        <TypingEffect
          multiText={[
            'Full Stack Developer',
            'E-Commerce Savvy',
            'Programming Tutor',
            'POS System Expert',
            'Full Stack Developer',
            'E-Commerce Savvy',
            'Programming Tutor',
            'POS System Expert',
          ]}
          typeSpeed={50}
          cursorColor="#fff"
          textStyle={{
            color: '#fff',
          }}
          startDelay={0}
          multiTextDelay={2000}
          eraseDelay={10}
        />
      </div>
      <Link to="/project">
        <button className="btn-light">View Projects</button>
      </Link>
    </Content>
  );
};

const Content = Styled.div`
  color: white;
  text-align : center;
  align-items: center;
  position:fixed;
  top:25%;
  left:25%;
  font-size: 2rem;

  span {
    font-size: 3.5rem;
  }

  abbr {
    color:#50bcdf;
  }

  .header {
    font-size: 4rem;
    @media only screen and (max-width: 900px) {
      font-size: 2rem;
    }

    @media only screen and (max-width: 520px) {
      
      font-size: 1.25rem;
    }
  }
  .typewriter { 
    .react-typewriter-text{
      text-align:center;
    }
    z-index:-1;
    display: block;
    font-size : 2rem;
    position:relative;
      top:-1rem;
    @media only screen and (max-width: 900px) {
      font-size: 1rem;
      position:relative;
      top:-1rem;
    }
    @media only screen and (max-width: 520px) {
      position:relative;
      top:-2rem;
      font-size: 0.6rem;
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
      @media only screen and (max-width: 520px) {
      position:relative;
      font-size:0.8rem;
      top:-2rem;
    }
    }
  }
`;

export default Landing;
