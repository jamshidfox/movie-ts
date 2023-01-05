import React, { useState } from "react"
import styled from "styled-components"
import { Collapse, Button, CardBody, Card } from "reactstrap"

const Container = styled("div")``

const CollapsedGenres = styled(Collapse)``
const Genres: React.FC = (props: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <Container>
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        Toggle
      </Button>
      <CollapsedGenres isOpen={isOpen}>
        <Card>
          <CardBody>
            {props.genres.map((genre: any) => (
              <h1>{genre.name}</h1>
            ))}
          </CardBody>
        </Card>
      </CollapsedGenres>
    </Container>
  )
}
export default Genres
