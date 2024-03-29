import styled from 'styled-components'

export const Container = styled.div`
  & .my-masonry-grid {
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  & .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  & .my-masonry-grid_column > a {
    /* change div to reference your elements you put in <Masonry> */
    display: block;
    background: grey;
    margin-bottom: 30px;
  }
`
