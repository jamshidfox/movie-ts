import React from "react"
import styled from "styled-components"

const Container = styled("div")`
  height: 100px;
  background-color: #1f0301; /* later from theme */
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HorizontalSection: React.FC = () => {
  return <Container></Container>
}
export { HorizontalSection }
