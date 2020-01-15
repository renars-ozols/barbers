import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => theme.media.tablet`
     max-width: 80rem;
     margin: 0 auto;
  `}
`

export const Item = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
`

export const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::after {
    content: ' ...........................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................';
  }
`
export const Price = styled.span`
  flex-shrink: 0;
`
