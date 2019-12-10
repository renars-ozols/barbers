import styled from 'styled-components'

export const NavWrapper = styled.nav`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.primary};
  transition: all 1s;

  ${({ theme }) => theme.media.tablet`
      display: none;
  `}
`
