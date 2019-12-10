import styled from 'styled-components'

import IconButton from '../icon-button/icon-button'

export const Container = styled.div`
  height: 100%;
  overflow: auto;
  padding: 2rem;
`

export const Message = styled.div`
  position: relative;
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: #1fe841;
  border-radius: 4px;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.greyLight1};
`

export const StyledForm = styled.form`
  & span {
    color: red;
    font-size: 1.4rem;
  }
`

export const Heading = styled.h1`
  text-align: center;
`
export const CloseButton = styled(IconButton)`
  position: absolute;
  top: -3%;
  right: -3%;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

  &:active,
  &:focus {
    transform: none;
  }
`
