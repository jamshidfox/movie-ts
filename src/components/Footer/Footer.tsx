import React from "react"

import styled from "styled-components"

const Container = styled("div")`
  height: 100px;
  background-color: #1f0301;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Navigation = styled("div")`
  display: flex;
  justify-content: center;
`
const Footer: React.FC = () => {
  return (
    <Container>
      <Navigation>
        <h3>Salom</h3>
      </Navigation>
    </Container>
  )
}
export { Footer }
