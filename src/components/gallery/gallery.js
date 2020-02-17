import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Masonry from 'react-masonry-css'
import Img from 'gatsby-image'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Fade from 'react-reveal/Fade'

import Heading from '../heading/heading'
import { Container } from './gallery.styles'

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0)

  const closeModal = () => setModalIsOpen(false)
  const openModal = (imageIndex, e) => {
    e.preventDefault()
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
              resolutions {
                originalName
              }
            }
          }
        }
      }
    }
  `)

  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    500: 1,
  }
  return (
    <section>
      <Heading
        h2
        center
        css={`
          margin-top: 8rem;
        `}
        id="showcase"
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
                  childImageSharp: { fluid, resolutions },
                },
              },
              i
            ) => (
              <Fade left key={fluid.src}>
                <a
                  href={fluid.src}
                  onClick={e => openModal(i, e)}
                  aria-label={`Link to ${resolutions.originalName}`}
                >
                  <Img fluid={fluid} alt={resolutions.originalName} />
                </a>
              </Fade>
            )
          )}
        </Masonry>
      </Container>
      {ModalGateway && (
        <ModalGateway>
          {modalIsOpen && (
            <Modal
              onClose={closeModal}
              styles={{
                blanket: base => ({
                  ...base,
                  zIndex: '200',
                }),
                positioner: base => ({
                  ...base,
                  zIndex: '300',
                }),
              }}
            >
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
    </section>
  )
}

export default Gallery
