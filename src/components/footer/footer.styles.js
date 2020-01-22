import styled from 'styled-components'

import Box from '../box/box'

export const Container = styled.footer`
  background-color: black;
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.greyLight1};
`
export const Credit = styled.p`
  margin: 2rem 0 4rem 0;
  text-align: center;
  font-size: 1rem;
`
export const FlexBox = styled(Box)`
  ${({ theme }) => theme.media.tablet`
     display: flex;
     justify-content: space-around;
  `}
`
