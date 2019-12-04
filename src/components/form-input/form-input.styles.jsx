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
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
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
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
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
  top: 1rem;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`
