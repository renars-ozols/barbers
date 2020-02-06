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
      z-index: 100;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.greyLight1};
      box-shadow: 0 0 0.2rem 0.1rem rgba(0, 0, 0, 0.2);
  `}
`
