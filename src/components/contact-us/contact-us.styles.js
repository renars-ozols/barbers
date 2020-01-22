import styled from 'styled-components'

import Button from '../button/button'

export const Group = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`
export const BtnMessage = styled(Button)`
  display: none;

  ${({ theme }) => theme.media.tablet`
     display: flex;
     align-items: center;
  `}
`
