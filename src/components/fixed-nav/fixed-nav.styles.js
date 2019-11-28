import styled from 'styled-components'

export const NavWrapper = styled.nav`
  height: ${props => (props.visible ? '5rem' : '0')};
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.primary};
  transition: all 0.5s;
`
