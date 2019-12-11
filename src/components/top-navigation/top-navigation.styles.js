import styled from 'styled-components'

export const NavWrapper = styled.nav`
  position: absolute;
  width: 100%;
  display: flex;
  z-index: 100;
`

export const LeftNav = styled.div`
  display: none;

  ${({ theme }) => theme.media.tablet`
      padding: 1rem 0 0 1rem;
      display: block;
  `}
`
export const RightNav = styled.div`
  padding: 1rem 1rem 0 0;
  margin-left: auto;
`

export const NavLink = styled.a`
  font-size: 2rem;
  padding: 0 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.greyLight1};
`
