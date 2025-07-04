import React from 'react';
import styled from 'styled-components';
import AiVideo from '../assets/images/AiVideo.mp4'; 
import AiVideoCaptions from '../assets/images/AiVideoCaptions.vtt';
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
      font-size: 1.6em;
      margin-bottom: 20px;
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
            <span>Hi, This is </span>
            <span className="hero__name"> MANYA GARG</span>
        </h1>
        <div className='hero__img'>
        <video width="550" height="350" controls>
  <source src={AiVideo} type="video/mp4" />
  <track
    src={AiVideoCaptions}
    kind="captions"
    srcLang="en"
    label="English captions"
  />
  Your browser does not support the video tag.
</video>
        </div>
        
<div className='hero__info'>
    <PText>
   <b> Software Engineer | Turning clean code into real-world impact, with discipline,
            creativity, and a love for the details.
     </b>
         </PText>
         <Button btnLink="/projects" btnText='see my works'/>
</div>
</div>
    </div>
    </HeroStyles>
  );
}
