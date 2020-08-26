import styled from 'styled-components';

export const Div = styled.div`
  /* style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '75%',
        margin: '0 auto',
        backgroundColor: '#1c5e52',
        borderRadius: '8px',
        padding: '40px',
      }} */
  /* 949 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 75%;
  margin: 0 auto;
  background-color: #1c5e52;
  border-radius: 8px;
  padding: 40px;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const SubTitle = styled.span`
  max-width: 350px;
  color: #fff;
`;

export const LinkBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-shrink: 0;
  a {
    text-decoration: none;
    margin: 5px;
  }
  a:hover {
    svg {
      color: #fff;
    }
  }
  svg {
    color: #42ae9f;
    width: 200px;
    height: auto;
  }
`;
