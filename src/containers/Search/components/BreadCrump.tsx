import styled from "styled-components"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"

const Container = styled.div``
const BreadCrump = () => {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">Library</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </Container>
  )
}
export default BreadCrump
