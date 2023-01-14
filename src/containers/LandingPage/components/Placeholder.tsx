import React from "react"
import placeImage from "../../../Images/Placeholder Imgae/Place.webp"
import {
  Card,
  CardImg,
  CardBody,
  Placeholder,
  PlaceholderButton,
} from "reactstrap"
import styled from "styled-components"

const Container = styled("div")`
  display: flex;
  flex-direction: column;
`
const NewMovie = styled("div")`
  width: 100%;
  height: 230px;
  overflow: hidden;
`
const PopularMoive = styled("div")`
  width: 100%;
`
const NewMovieCard = styled(Card)`
  width: 16rem;
  margin: 1rem;
  height: 12rem;
  display: inline-block;
`
const PopularMovieCard = styled(Card)`
  width: 12rem;
  margin: 1rem 3rem;
  height: 16rem;
  display: inline-block;
`

const PlaceholderCard = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  return (
    <Container>
      <NewMovie>
        {arr.map(() => (
          <NewMovieCard>
            <CardImg
              alt="Card image cap"
              src={placeImage}
              top
              width="100%"
              height="70%"
            />
            <CardBody>
              <Placeholder animation="wave">
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder animation="wave">
                <Placeholder xs={12} />
                <Placeholder xs={7} />
              </Placeholder>
              <PlaceholderButton xs={8} />
            </CardBody>
          </NewMovieCard>
        ))}
      </NewMovie>
      <h1>Popular movies</h1>
      <PopularMoive>
        {arr.map(() => (
          <PopularMovieCard>
            <CardImg
              alt="Card image cap"
              src={placeImage}
              top
              width="100%"
              height="70%"
            />
            <CardBody>
              <Placeholder animation="wave">
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder animation="wave">
                <Placeholder xs={12} />
                <Placeholder xs={7} />
              </Placeholder>
              <PlaceholderButton xs={8} />
            </CardBody>
          </PopularMovieCard>
        ))}
      </PopularMoive>
    </Container>
  )
}

export default PlaceholderCard
