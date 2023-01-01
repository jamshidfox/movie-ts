import React from "react"
import styled from "styled-components"
import { Row, Col } from "reactstrap"
import { PlusCircle, Youtube } from "react-feather"

const Container = styled(Row)`
  min-height: 40rem;
  background-image: url("https://images4.alphacoders.com/761/76146.jpg");
  background-size: cover;
  color: pink;
  resize: both;
`
const InfoContainer = styled(Col)`
  padding: 2rem 0rem 0rem 6rem;
`
const MovieTitle = styled.h1`
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 2rem;
`
const RatingContainer = styled.div`
  display: flex;

  flex-direction: row;
`
const Stars = styled.div`
  --star-color: orange;
  margin: 1em auto;
  font-size: 1em;
  position: relative;
  display: block;
  width: 0px;
  height: 0px;
  border-right: 1em solid transparent;
  border-bottom: 0.7em solid var(--star-color);
  border-left: 1em solid transparent;
  transform: rotate(35deg);
  &:before {
    border-bottom: 0.8em solid var(--star-color);
    border-left: 0.3em solid transparent;
    border-right: 0.3em solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -0.45em;
    left: -0.65em;
    display: block;
    content: "";
    transform: rotate(-35deg);
  }
  &:after {
    position: absolute;
    display: block;
    top: 0.03em;
    left: -1.05em;
    width: 0;
    height: 0;
    border-right: 1em solid transparent;
    border-bottom: 0.7em solid var(--star-color);
    border-left: 1em solid transparent;
    transform: rotate(-70deg);
    content: "";
  }
`
const TypeOfMovieContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`

const TypeOfMovieEl = styled.div`
  padding: 0rem 2rem 0rem 0rem;
  margin-right: 2rem;
  border-right: 0.1rem solid white;
  width: fit-content;
`
const WatchContainer = styled.div`
  margin-top: 2rem;
`
const Paragraph = styled.p`
  margin-top: 2rem;
`

const HeadMovieInfo: React.FC = () => {
  return (
    <Container>
      <InfoContainer sm="5">
        <MovieTitle>Black Window</MovieTitle>
        <RatingContainer>
          <Stars />
          <Stars />
          <Stars />
          <Stars />
        </RatingContainer>
        <TypeOfMovieContainer>
          <TypeOfMovieEl>Drama</TypeOfMovieEl>
          <TypeOfMovieEl>Action</TypeOfMovieEl>
          <TypeOfMovieEl>SCI-FL</TypeOfMovieEl>
        </TypeOfMovieContainer>
        <WatchContainer>
          <Youtube size={55} style={{ marginRight: "1rem" }} />
          <PlusCircle size={55} />
        </WatchContainer>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam
          minima, voluptates cum facere commodi nam cupiditate. Molestias dolore
          sapiente, nisi cumque debitis veniam doloremque. Qui ipsam dolore
          expedita tenetur.
        </Paragraph>
      </InfoContainer>
      <Col sm="7"></Col>
    </Container>
  )
}

export default HeadMovieInfo
