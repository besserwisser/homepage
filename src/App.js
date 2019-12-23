import React from "react";
import styled from 'styled-components';
import Filter from './components/Filter';
import GeoElement from "./components/GeoElement";
import { totalCount, horizontalCount, verticalCount, gap } from "./config";


const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(${horizontalCount}, 1fr);
  grid-template-rows: repeat(${verticalCount}, 1fr);
  gap: ${gap}px;
  filter: url('#filter');
  overflow: hidden;
  `;


function App() {

  const Geos = [...Array(totalCount)].map( (el, i) => (<GeoElement key={i} />) );

  console.log(Geos);
  return (
    <>
      <Filter></Filter>
      <StyledContainer>
        { Geos }
      </StyledContainer>
    </>
  );
}

export default App;
