import styled from 'styled-components'

export const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.tablet`
      flex-direction: row;

      & :not(:last-child) {
          margin-right: 2rem;
      }
  `}

  & > div {
    margin-bottom: 4rem;

    ${({ theme }) => theme.media.tablet`
      margin-bottom: 0;
  `}
  } */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 4rem;
`
