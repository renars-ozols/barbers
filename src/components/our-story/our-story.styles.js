import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const Background = styled(BackgroundImage)`
  /* ${({ theme }) => theme.media.tablet`
     min-height: 60vh;
  `}
  ${({ theme }) => theme.media.laptop`
     min-height: 80vh;
  `} */
`
export const InnerWrapper = styled.div`
  padding: 4rem 0;
  max-width: 120rem;
  margin: auto;
`
export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.greyLight1};
  font-size: 1.5rem;
  padding: 2rem;
`
