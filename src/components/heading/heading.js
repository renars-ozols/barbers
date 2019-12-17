import React from 'react'
import styled, { css } from 'styled-components'

const baseStyle = css`
  margin-bottom: ${props => props.noMarginBottom && '0'};
  color: ${({ theme }) => theme.colors.greyDark1};
  margin-top: ${props => props.noMarginTop && '0'};
  text-align: ${props => {
    if (props.center) return 'center'
    if (props.right) return 'right'
    return 'left'
  }};
  text-transform: ${props => props.uppercase && 'uppercase'};
  max-width: 100%;
`

const HeadingOne = styled.h1`
  font-size: 4rem;
  margin-bottom: 4rem;
  margin-top: 4rem;
  ${baseStyle};
`

const HeadingTwo = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 4rem;
  margin-top: 4rem;
  ${baseStyle};
`

const HeadingThree = styled.h3`
  font-size: 3rem;
  margin-bottom: 4rem;
  margin-top: 4rem;
  font-weight: 300;
  ${baseStyle};

  ${({ theme }) => theme.media.laptop`
    margin-bottom: 4rem;
    letter-spacing: 0.5rem;
  `}
`

const HeadingFour = styled.h4`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  margin-top: 4rem;
  font-weight: 300;
  ${baseStyle};
`

const HeadingFive = styled.h5`
  font-size: 2rem;
  margin-bottom: 4rem;
  margin-top: 4rem;
  font-weight: 300;
  ${baseStyle};
`

const Heading = ({ h2, h3, h4, h5, noMargin, right, center, ...props }) => {
  if (h2)
    return (
      <HeadingTwo
        noMargin={noMargin}
        right={right}
        center={center}
        {...props}
      />
    )
  if (h3)
    return (
      <HeadingThree
        noMargin={noMargin}
        right={right}
        center={center}
        {...props}
      />
    )
  if (h4)
    return (
      <HeadingFour
        noMargin={noMargin}
        right={right}
        center={center}
        {...props}
      />
    )
  if (h5)
    return (
      <HeadingFive
        noMargin={noMargin}
        right={right}
        center={center}
        {...props}
      />
    )
  return (
    <HeadingOne noMargin={noMargin} right={right} center={center} {...props} />
  )
}

export default Heading
