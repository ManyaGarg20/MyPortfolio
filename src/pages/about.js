/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
// import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem.js';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
import ExamplePdf from '../assets/data/pdf.pdf';

const AboutPageStyles = styled.div`
  padding: 15rem 0 1rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 3rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 7px solid var(--gray-1);
      width:90%;
      height: 80%;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .button {
    font-size: 2.2rem;
    background-color: var(--gray-1) ;
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: black;
  }
  @media only screen and (max-width: 768px) {
    padding: 9rem 0 0 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
      margin-bottom: -5rem;

    }
    .about__subheading {
      font-size: 1.7rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 2.6rem;
    }
    .right {
      img {
        border: 7px solid var(--gray-1);
        width:50%;
      }
    }
    .button {
      font-size: 1.6rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Manya Garg</span>
              </p>
              <h2 className="about__heading">A final year B.Tech student</h2>
              <div className="about__info">
                <PText>
                  I live in indirapuram ,ghaziabad.
                  <br /> <br />
                  I started coding since I was in my first year of college. Coding is an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoy the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <a href={ExamplePdf} download="Manya_Resume" target="_blank" rel="noreferrer" className='button'> Download CV  </a>
             </div>
            <div className="right">
              <img src={AboutImg} alt="myImg" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School - 10th"
                items={['Sun Valley International School , Vaishali ,Ghaziabad ','Percentage : 96.6%' , '2017-18']}
              />
              <AboutInfoItem
                title="School- 12th"
                items={['Sun Valley International School , Vaishali ,Ghaziabad',     'Percentage : 95.4%' ,'2019-20']}
              />
              <AboutInfoItem
                title="College"
                items={['Jaypee Institute of Information and Technology , Noida',    'CGPA : 7.9         ' , ' 2020-24']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>
              <AboutInfoItem
                title="Programming Languages"
                items={['c++']}
              />
              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'SQL', 'PHP']}
              />
              <AboutInfoItem
                title="Design"
                items={['Canva', 'Ms Word', 'Figma']}
              />
               <AboutInfoItem
                title="Languages"
                items={['Hindi', 'English']}
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">Trainings/Internships</h1>

              <AboutInfoItem
                title="Intern"
                items={['Summer Intern @ S&P Global','2023 June-July']}
              />
              <AboutInfoItem
                title="Intern"
                items={['Web Intern @ BasketHunt Pvt Ltd ','2023 Feb-March']}
              />
             
            </div>
          </div>
        </div>
        <ContactBanner />
        <Footer />
      </AboutPageStyles>
    </>
  );
}