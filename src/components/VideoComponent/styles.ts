import styled from 'styled-components';

export const UlVideos = styled.ul`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  max-width: 100%;
`;
export const Li = styled.li`
  display: flex;
  flex: 1;
  background: lightgray;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: unset;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  list-style: none;

  max-width: 100%;
  margin: 15px 10px;
  height: auto;

  div {
    padding: 10px;
    display: flex;
    flex: 1;
    flex-direction: column;
    max-width: 400px;
  }
  iframe {
    border-radius: 8px;
    max-width: 400px;
  }
`;
