import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledNav = styled.nav`
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.greyLight1};
  text-decoration: none;
`
