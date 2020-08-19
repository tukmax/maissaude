import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

export const Li = styled.li`
  a {
    color: #1c5e52;
    text-decoration: none;
    font-size: 28px;
    font-weight: bold;
    margin: 5px;
    padding: 5px;
    transition: border-bottom 0.3s;
    &:hover {
      border-bottom: 3px solid #42ae9f;
    }
  }
`;
