import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  font-size: 2.5rem;
  padding: 1rem 1.5rem;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.greyLight1};
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`
