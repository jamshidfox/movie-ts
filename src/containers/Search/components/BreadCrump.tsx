import styled from "styled-components"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"

const Container = styled.div``
const BreadItem = styled(BreadcrumbItem)`
  font-size: 12px;
  & > a {
    text-decoration: none;
    color: white;
  }
`

const BreadCrump = () => {
  return (
    <Container>
      <Breadcrumb>
        <BreadItem>
          <a href="#">Home</a>
        </BreadItem>
        <BreadItem active>Search</BreadItem>
      </Breadcrumb>
    </Container>
  )
}
export default BreadCrump
