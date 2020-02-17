import styled from 'styled-components'

export const StyledNav = styled.nav`
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.greyLight1};
  text-decoration: none;
`
