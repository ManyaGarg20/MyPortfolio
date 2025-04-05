import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img2.png';

const AboutSectionStyles = styled.div`
padding: 8rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 1.5rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  .linkedIn{
color: var(--white)
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutImg{
        display: none;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 2rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 1rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
    <div className="container">
      <div className="aboutSection__left">
        <SectionTitle
          subheading="Let me introduce myself"
          heading="About Me"
        />
        <PText>
     <b> Software Engineer | I am driven and detail-oriented, with a strong 
            grasp of front-end technologies—React, TypeScript, AG Grid, and CSS-in-JS.
              I like things to be organized and precise, often focusing on precision
              .I am also solution-focused, diving deep into subtle UI issues and seeking elegant answers.
            </b>
    <br /> <br/>
<span className='linkedIn'> LinkedIn :  <a target="_blank" rel="noreferrer" href="//www.linkedin.com/in/manya-garg-99849320a/">
              @ManyaGarg
            </a></span>
        </PText>
        <div className="aboutSection__buttons">
          <Button btnText="Works" btnLink="/projects" />
          <Button btnText="Read More" btnLink="/about" outline />
        </div>
      </div>
      <div className="aboutSection__right">
        <img className="aboutImg" src={AboutImg} alt="Img" />
      </div>
    </div>
  </AboutSectionStyles>
  );
}
