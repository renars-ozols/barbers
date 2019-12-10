import styled, { css } from 'styled-components'

const subColor = 'grey'
const mainColor = 'black'

const shrinkLabelStyles = css`
  top: -2.5rem;
  font-size: 1.6rem;
  color: ${mainColor};
`

export const GroupContainer = styled.div`
  position: relative;
`

export const FormInputContainer = styled.input`
  font-family: inherit;
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1.8rem;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  width: 100%;
  border: ${({ border }) => border || `1px solid ${subColor}`};
  border-radius: 4px;
  margin-top: 2rem;

  &:focus {
    outline: none;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1.8rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: 0.5rem;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`
