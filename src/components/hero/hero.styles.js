import styled, { keyframes } from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import Logo from '../../images/logo.svg'

const upAndDown = keyframes`
  0% { 
    transform: translateY(0); 
  }
  100% { 
    transform: translateY(-1rem); 
  }
`

export const StyledBg = styled.section`
  background-image: linear-gradient(
      rgba(16, 29, 44, 0.93),
      rgba(16, 29, 44, 0.93)
    ),
    url(${props => props.image});
  background-size: cover;
  height: 95vh;
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
export const ArrowLink = styled.a`
  animation: ${upAndDown} 1s infinite alternate;
  font-size: 2rem;
  margin: 0 auto 3rem auto;
  color: ${({ theme }) => theme.colors.greyLight1};

  ${({ theme }) => theme.media.tablet`
      display: none;
  `}
`
