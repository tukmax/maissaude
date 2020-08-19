import styled from 'styled-components';

export const Row = styled.div`
  &.row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    max-width: 40vw;
  }
`;

export const Column = styled.div`
  &.column {
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
  }
  &.img {
    margin-top: 8px;
    vertical-align: middle;
  }
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media (max-width: 800px) {
    &.column {
      flex: 50%;
      max-width: 50%;
    }
  }

  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media (max-width: 600px) {
    &.column {
      flex: 100%;
      max-width: 100%;
    }
  }
`;
