import React from 'react';
import styled, { keyframes } from 'styled-components';
import { minDuration, maxDuration, minMovement, maxMovement, minScale, maxScale, minInit, maxInit } from '../config';
import { getRandomNumber, getRandomColor } from '../utils';


const color = getRandomColor();

const anim = ({x, y, scale, initX, initY}) => keyframes`
   0% {
      transform: translate(${initX}px, ${initY}px) scale(${scale});
   }
   20% {
      transform: translate(${Math.random() * x}px, ${Math.random() * y}px) scale(${scale * 0.7})
   }
   50% {
      transform: translate(${x}px, ${y}px) scale(1)
   }
   70% {
      transform: translate(${Math.random() * x}px, ${Math.random() * y}px) scale(${scale * 1.3})
   }
   100% {
      transform: translate(${initX}px, ${initY}px) scale(${scale});
   }
`

const StyledContainer = styled.div`
   display: inline-block;
   width: 100%;
   height: 100%;
   border-radius: 50%;
   background-color: ${color};
   box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.5);
   animation: ${props => anim(props)} ${props => props.duration}s ease-in-out infinite; 
   animation-delay: ${props => props.delay}s;
   ::after {
      content: '';
      position: absolute;
      top: 30%;
      left: 30%;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.25);
   }
`


const GeoElement = () => {

   const duration = getRandomNumber(minDuration, maxDuration);
   const delay = getRandomNumber(-duration, 0);
   console.log(delay);
   const initX = getRandomNumber(minInit, maxInit);
   const initY = getRandomNumber(minInit, maxInit);
   const x = getRandomNumber(minMovement, maxMovement);
   const y = getRandomNumber(minMovement, maxMovement);
   const scale = getRandomNumber(minScale, maxScale);

   return ( 
      <StyledContainer {...{duration, delay, initX, initY, x, y, scale}}></StyledContainer>
   );
}
 
export default GeoElement;