import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SideMenu>
      <div className="contact">
        <ul className="contact-list">
          <li className="contact__item">
            <a
              href="https://www.linkedin.com/in/hank-kim/"
              target="_blank"
              className="contact-link contact-link-linkedin"
            >
              <span className="contact-label">Linkedin</span>{' '}
              <i className="fab fa-linkedin"></i>
            </a>
          </li>

          <li className="contact__item">
            <a
              href="https://github.com/hank-dohwankim"
              target="_blank"
              className="contact-link contact-link-github"
            >
              <span className="contact-label">Github</span>{' '}
              <i className="fab fa-github-square"></i>
            </a>
          </li>

          <li className="contact__item">
            <a
              href="https://docs.google.com/document/d/1S02ZEx1-gUVBkr2Q0HRWSwMN3h8gKx9IxyTxO1qh3L4"
              target="_blank"
              className="contact-link contact-link-resume"
            >
              <span className="contact-label">Resume</span>{' '}
              <i className="fas fa-address-card"></i>
            </a>
          </li>

          <li className="contact__item">
            <a
              href="mailto:hank.dohwankim@gmail.com"
              target="_blank"
              className="contact-link contact-link-email"
            >
              <span className="contact-label">Email</span>{' '}
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </SideMenu>
  );
};

const SideMenu = styled.div`
  .contact {
    position: absolute;
    top: 50%;
    left: -7rem;
    transform: translateY(-50%);
    z-index: 0;

    @media only screen and (min-width: 100em) {
      left: -12.5rem;
    }

    &-list {
      list-style: none;
    }

    &-link {
      &:visited,
      &:link {
        display: block;
        color: #fff;
        font-size: 1.5rem;
        padding: 1rem;
        transition: all 450ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        text-decoration: none;

        @media only screen and (max-width: 31.25em) {
          padding: 0.5rem;
        }

        @media only screen and (min-width: 100em) {
          padding: 1rem;
          font-size: 2.8rem;
        }
      }

      &-linkedin {
        background-color: #0077b5;
      }
      &-github {
        background-color: #333;
      }
      &-email {
        background-color: #74c23d;
      }
      &-resume {
        background-color: #dc143c;
      }

      &:hover,
      &:active,
      &:focus {
        transform: translateX(6.4rem);
      }
    }

    &-label {
      display: inline-block;
      vertical-align: middle;
      font-size: 1.1rem;
      margin-right: 1.2rem;
      width: 5.8rem;
      letter-spacing: 1px;
      text-align: right;
      text-transform: uppercase;

      @media only screen and (min-width: 100em) {
        width: 10.8rem;
      }
    }
  }
`;

export default Sidebar;
