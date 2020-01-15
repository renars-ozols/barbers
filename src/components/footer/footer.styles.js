import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: black;
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.greyLight1};

  ${({ theme }) => theme.media.laptop`
     flex-direction: row;
     flex-wrap: wrap;
  `}
`
export const Credit = styled.p`
  margin: 2rem 0 4rem 0;
  text-align: center;
  font-size: 1rem;

  ${({ theme }) => theme.media.laptop`
     flex: 1;
  `}
`
