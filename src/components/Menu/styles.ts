import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  li {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1c5e52;
      text-decoration: none;
      font-size: 28px;
      font-weight: bold;
      margin: 5px;
      padding: 5px;
      transition: border-bottom 0.3s;
      /* border-right: 1px solid black; */
      &:hover {
        border-bottom: 3px solid #42ae9f;
      }
      &.selected {
        border-bottom: 3px solid #42ae9f;
      }
    }
  }
`;
