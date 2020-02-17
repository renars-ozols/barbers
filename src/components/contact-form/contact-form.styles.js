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
  font-size: 1.8rem;
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
  top: -1.5rem;
  right: -1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  z-index: 10;
  cursor: pointer;

  &:active,
  &:focus {
    transform: none;
  }
`
export const InfoBtn = styled(IconButton)`
  padding: 0;
  position: absolute;
  top: 0rem;
  right: 0rem;

  &:active,
  &:focus {
    transform: none;
    box-shadow: none;
  }
`
