import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 2rem;

  ${({ theme }) => theme.media.laptop`
     padding: 0 4rem;
  `}

  ${({ theme }) => theme.media.desktop`
     max-width: 200rem;
     margin: 0 auto;
  `}
`
