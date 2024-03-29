import styled from 'styled-components'

export const ButtonContainer = styled.button`
  font-family: inherit;
  font-size: 2rem;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: ${({ noRadius }) => (noRadius ? '0' : '4px')};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.greyLight1};
  letter-spacing: 0.3rem;
  text-transform: ${({ upperCase }) => (upperCase ? 'uppercase' : 'none')};
  box-shadow: ${({ noShadow }) =>
    noShadow ? '0' : '0 0.5rem 1rem rgba(0, 0, 0, 0.2)'};
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: #d7b791;
  }
`
