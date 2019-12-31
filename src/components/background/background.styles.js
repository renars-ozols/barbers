import styled from 'styled-components'
import Img from 'gatsby-image'

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`

export const Overlay = styled.div`
  width: 100%;
  background: linear-gradient(rgba(16, 29, 44, 0.93), rgba(16, 29, 44, 0.93));
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || '100vh'};
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`
