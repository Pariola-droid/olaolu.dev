import styled from 'vue-styled-components'

const StyledCornerstone = styled.section`
  .cornerstone__content {
    flex-direction: column;

    .cavalier {
      &:nth-of-type(2) {
        align-self: flex-end;
      }
    }
  }
`

StyledCornerstone.name = 'StyledCornerstone'
export default StyledCornerstone
