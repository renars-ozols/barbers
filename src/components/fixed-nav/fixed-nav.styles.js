import styled from 'styled-components'

export const NavWrapper = styled.nav`
  display: flex;
  opacity: ${props => (props.visible ? '1' : '0')};
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
export const NavButton = styled.button`
  display: flex;
  font-size: 2.5rem;
  padding: 1rem 1.5rem;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.greyLight1};

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`
