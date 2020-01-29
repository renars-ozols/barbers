import styled from 'styled-components'

export const Button = styled.button`
  display: none;

  ${({ theme }) => theme.media.tablet`
      position: fixed;
      display: ${props => (props.visible ? 'flex' : 'none')};
      bottom: 5%;
      right: 5%;
      font-size: 2.5rem;
      border-radius: 50%;
      padding: 1rem;
      border: none;
      z-index: 1000;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.greyLight1};
  `}
`
