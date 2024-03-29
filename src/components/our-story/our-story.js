import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Fade from 'react-reveal/Fade'

import Heading from '../heading/heading'
import { InnerWrapper, Paragraph } from './our-story.styles'

const OurStory = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "chairs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1990, quality: 10) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageStack = [
    data.background.childImageSharp.fluid,
    `linear-gradient(rgba(16, 29, 44, 0.8), rgba(16, 29, 44, 0.8))`,
  ].reverse()
  return (
    <BackgroundImage Tag="section" fluid={imageStack} fadeIn="false">
      <InnerWrapper>
        <Fade top>
          <Heading
            h2
            center
            noMarginTop
            css={`
              color: ${({ theme }) => theme.colors.greyLight1};
              margin-bottom: 2rem;
            `}
          >
            Our Story
          </Heading>
        </Fade>
        <Fade left>
          <Paragraph>
            Aliquam malesuada bibendum arcu vitae elementum curabitur vitae.
            Nulla aliquet porttitor lacus luctus accumsan tortor. Risus at
            ultrices mi tempus imperdiet nulla malesuada pellentesque.
            Pellentesque dignissim enim sit amet venenatis. Venenatis urna
            cursus eget nunc scelerisque viverra. Ultrices eros in cursus turpis
            massa tincidunt dui ut. Ultricies mi quis hendrerit dolor magna eget
            est lorem. Aliquam vestibulum morbi blandit cursus risus at ultrices
            mi. Nunc vel risus commodo viverra maecenas accumsan lacus. Pharetra
            sit amet aliquam id. Donec pretium vulputate sapien nec sagittis
            aliquam malesuada bibendum arcu. Rhoncus est pellentesque elit
            ullamcorper dignissim. Praesent elementum facilisis leo vel
            fringilla est. Tellus cras adipiscing enim eu turpis egestas pretium
            aenean. Ante in nibh mauris cursus mattis molestie.
          </Paragraph>
        </Fade>
      </InnerWrapper>
    </BackgroundImage>
  )
}

export default OurStory
