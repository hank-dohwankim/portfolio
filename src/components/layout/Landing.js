import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const Landing = () => {
  return (
    <Content>
      <h1>
        I Am <abbr>&#123;</abbr> HANK KIM <abbr>&#125;</abbr> The
      </h1>
      <br />
      <br />
      <h2>
        <span
          className="txt-type"
          data-wait="1000"
          data-words='["Full Stack Developer","Programming Tutor","E-Commerce Savvy","POS System expert"]'
        ></span>
        <br />
      </h2>
      <br />
      <Link to="/project">
        <button className="btn-light">View Projects</button>
      </Link>
    </Content>
  );
};

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

const Content = Styled.div`
  color: white;
  text-align : center;
  padding-top :10%;
  font-size: 2rem;

  abbr {
    color:#50bcdf;
  }

  h1 {
    font-size: 5rem;
  }

  h2 { font-size : 4.5rem;}

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
    }
  }
`;

export default Landing;
