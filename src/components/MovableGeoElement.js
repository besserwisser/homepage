import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import {StyledContainer} from './GeoElement.js';

const MovableContainer = styled(StyledContainer)`
   position: absolute;
   width: 20vh;
   height: 20vh;
   transition: opacity 600ms ease-in-out;
`

const MovableGeoElement = () => {
   const ref = useRef();
   const [pos, setPos] = useState({x: 0, y: 0});
   const [opacity, setOpacity] = useState(0);

   useEffect( () => {
      const handlePos = e => {
         const event = e.touches ? e.touches[0] : e;
         if(!event) 
            return;
         const x = event.clientX - (ref.current.offsetWidth / 2);
         const y = event.clientY - (ref.current.offsetHeight / 2);
         setPos({x, y});
      }
      const handleDown = e => {
         setOpacity(1);
         handlePos(e);
      };
      const handleUp = e => {
         setOpacity(0);
         handlePos(e);
      };
      window.addEventListener('mousedown', handleDown);
      window.addEventListener('mousemove', handlePos);
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('touchstart', handleDown);
      window.addEventListener('touchmove', handlePos);
      window.addEventListener('touchend', handleUp);
      return () => {
         window.removeEventListener('mousedown', handleDown);
         window.removeEventListener('mousemove', handlePos);
         window.removeEventListener('mouseup', handleUp);
         window.removeEventListener('touchstart', handleDown);
         window.removeEventListener('touchmove', handlePos);
         window.removeEventListener('touchend', handleUp);
      }
   }, [] );

   const style = {
      transform: `translate(${pos.x}px, ${pos.y}px)`,
      opacity
   }

   return ( <MovableContainer ref={ref} pos={pos} style={style}></MovableContainer> );
}
 
export default MovableGeoElement;