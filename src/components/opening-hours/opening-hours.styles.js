import styled from 'styled-components'

export const Group = styled.div`
  display: flex;
  margin: 0 auto;
  width: 70%;
  justify-content: space-between;
  font-size: 1.5rem;

  ${({ theme }) => theme.media.laptop`
     flex: 1 0 50%;
  `}
`
