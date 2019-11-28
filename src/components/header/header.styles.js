import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import Logo from '../../images/logo.svg'

export const Hero = styled(BackgroundImage)`
  height: 100vh;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.tablet`
      height: 50vh;
  `}
`

export const LogoWrapper = styled.div`
  margin: auto;
`

export const StyledLogo = styled(Logo)`
  height: 30rem;
  width: 30rem;
`
