import styled from 'styled-components'
import Img from 'gatsby-image'
import Heading from '../heading/heading'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 30rem auto auto;
  grid-row-gap: 3.5rem;
  background-color: ${({ theme }) => theme.colors.greyLight1};
`
export const StyledImg = styled(Img)`
  width: 100%;
`
export const Title = styled(Heading)`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  justify-self: center;
  align-self: end;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
  width: 80%;
  transform: translateY(50%);
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
`
export const Feature = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  margin: 1.5rem 0 0 2.5rem;
`
