import React from 'react';
import styled from 'styled-components';

import PText from './PText';

const FooterStyle = styled.div`
margin-top: 4rem;
  .copyright {
    background-color: var(--dark-bg);
    padding: 1rem 0;
    text-align: center;
    width: 50%;
    margin: auto;
     }
  @media only screen and (max-width: 768px) {
     .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2023 - MANYA GARG | Designed By
{' '}
            <a target="_blank" rel="noreferrer" href="//www.linkedin.com/in/manya-garg-99849320a/">
              manya garg
            </a>
{' '}
          </PText>
        </div>
      </div>

    </FooterStyle>
  );
}
