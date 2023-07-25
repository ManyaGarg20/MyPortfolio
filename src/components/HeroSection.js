import React from 'react';
import styled from 'styled-components';
import MyImg from '../assets/images/img-mg2.jpg';
import PText from './PText';
import Button from './Button';

const HeroStyles = styled.div`
.hero {
    height: 60vh;
    min-height: 600px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 15vh;
  }
  .hero__heading {
    font-size: 2em;
    margin-bottom: -2rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 2em;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 550px;
    height: 350px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    box-shadow: 4px -5px 1px black;
  }
  .hero__info{
    margin-top: 1.2rem;
  }
@media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }   
  }

`;

export default function HeroSection() {
  return (
    <HeroStyles>
        <div className='hero'>
    <div className='container'>
        <h1 className='hero__heading'>
            <span>Hello , This is </span>
            <span className="hero__name"> MANYA GARG</span>
        </h1>
        <div className='hero__img'>
            <img src={MyImg} alt="myImg" />
        </div>
        
<div className='hero__info'>
    <PText>
    Dedicated and a hardworking individual
currently enrolled in the 3rd year of
Btech(CS). Looking for a suitable position
to utilise my strong technical and
analytical skills. Also a team player with
an eye for detail.

         </PText>
         <Button btnLink="/projects" btnText='see my works'/>
</div>
</div>
    </div>
    </HeroStyles>
  );
}
