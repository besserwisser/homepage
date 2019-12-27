import React from "react";
import styled from "styled-components";
import Filter from "./components/Filter";
import GeoElement from "./components/GeoElement";
import { totalCount, horizontalCount, verticalCount, gap } from "./config";
import MovableGeoElement from "./components/MovableGeoElement";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${horizontalCount}, 1fr);
  grid-template-rows: repeat(${verticalCount}, 1fr);
  @media (orientation: landscape) {
    grid-template-columns: repeat(${verticalCount}, 1fr);
    grid-template-rows: repeat(${horizontalCount}, 1fr);
  }
  gap: ${gap}px;
  filter: url("#filter");
  overflow: hidden;
`;

function App() {
  const Geos = [...Array(totalCount)].map((el, i) => <GeoElement key={i} />);

  return (
    <>
      <Filter></Filter>
      <StyledContainer>
        {Geos}
        <MovableGeoElement></MovableGeoElement>
      </StyledContainer>
    </>
  );
}

export default App;
