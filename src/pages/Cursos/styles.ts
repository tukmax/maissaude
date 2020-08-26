import styled from 'styled-components';

export const UlImg = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  max-width: 100%;

  li {
    display: flex;
    flex: 1;
    background: lightgray;
    flex-direction: row;

    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    list-style: none;

    max-width: 80%;
    margin: 15px 10px;
    height: auto;

    div {
      padding: 10px;
      /* display: inline-block; */
      display: flex;
      flex: 1;
      flex-direction: column;

      max-width: 900px;
      text-align: justify;
      h1 {
        text-align: center;
        text-indent: 0px;
      }
      h3,
      h4 {
        text-indent: 30px;
      }
    }
    img {
      border-radius: 8px;
      max-width: 600px;
      height: auto;
    }
  }
`;
