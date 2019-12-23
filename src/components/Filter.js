import React from 'react';

const Filter = () => {
   return (
     <>
       <svg style={{ position: "absolute", width: 0, height: 0 }}>
         <filter id="filter">
           <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="20" />
           <feColorMatrix
             in="blur"
             values="
              1 0 0 0 0 
              0 1 0 0 0 
              0 0 1 0 0 
              0 0 0 200 -100"
           />
         </filter>
       </svg>
     </>
   )
 }

export default Filter;