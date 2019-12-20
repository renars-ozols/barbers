import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 4rem;

  ${({ theme }) => theme.media.tablet`
     grid-template-columns: repeat(2, 1fr);
  `}

  ${({ theme }) => theme.media.laptop`
     grid-template-columns: repeat(4, 1fr);
  `}
`
