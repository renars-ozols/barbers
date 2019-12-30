import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Masonry from 'react-masonry-css'
import Img from 'gatsby-image'
import Carousel, { Modal, ModalGateway } from 'react-images'

import Heading from '../heading/heading'
import { Container } from './gallery.styles'

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0)

  const closeModal = () => setModalIsOpen(false)
  const openModal = imageIndex => {
    setModalCurrentIndex(imageIndex)
    setModalIsOpen(true)
  }

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 768, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  return (
    <div>
      <Heading
        h2
        center
        css={`
          margin-top: 8rem;
        `}
      >
        Showcase
      </Heading>
      <Container>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.allFile.edges.map(
            (
              {
                node: {
                  childImageSharp: { fluid },
                },
              },
              i
            ) => (
              <div key={fluid.src} onClick={() => openModal(i)}>
                <Img fluid={fluid} />
              </div>
            )
          )}
        </Masonry>
      </Container>
      {ModalGateway && (
        <ModalGateway>
          {modalIsOpen && (
            <Modal onClose={closeModal}>
              <Carousel
                views={data.allFile.edges.map(
                  ({
                    node: {
                      childImageSharp: { fluid },
                    },
                  }) => ({
                    source: fluid.src,
                  })
                )}
                currentIndex={modalCurrentIndex}
                components={{ FooterCount: () => null }}
              />
            </Modal>
          )}
        </ModalGateway>
      )}
    </div>
  )
}

export default Gallery