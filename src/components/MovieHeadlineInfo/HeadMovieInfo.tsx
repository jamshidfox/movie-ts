import React from "react"
import styled from "styled-components"
import { Row, Col } from "reactstrap"
import { IoIosPlayCircle, IoMdAddCircle } from "react-icons/io"
const Container = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 40rem;
  background-size: 100% 100%;
  margin: 0;
  background-size: cover;
  color: pink;
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    display: none;
  }
  resize: both;
`
const InfoContainer = styled(Col)`
  padding: 2rem 0rem 0rem 3rem;
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem 0rem 0rem 2rem;
    align-items: center;
  }
`
// const MovieTitle = styled.h1`
//   font-family: "Comic Sans MS", cursive, sans-serif;
//   font-size: 2rem;
//   letter-spacing: 0.1em;
//   @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
//     display: none;
//   }
// `
const RatingContainer = styled.div`
  display: flex;

  flex-direction: row;
`
interface Props {
  isRated: boolean
}
const Stars = styled.div<Props>`
  --star-color: orange;
  --star-color: ${(p: Props) => (p.isRated ? "orange" : "#797a7a")};
  margin: 1em 0em;
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
  transform: rotate(35deg) scale(0.7);
`
const TypeOfMovieContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  & > :last-child {
    border: none;
    padding: 0;
    margin: 0;
  }
`

const TypeOfMovieEl = styled.div`
  padding: 0rem 1rem 0rem 0rem;
  margin-right: 1rem;
  border-right: 0.1rem solid white;
  width: fit-content;
`
const WatchContainer = styled.div`
  margin-top: 2rem;
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    display: none;
  }
  > .icons {
    color: red;
    font-size: 4rem;
  }
`
const Paragraph = styled.p`
  margin-top: 2rem;
  width: 450px;
  font-size: 12px;
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    display: none;
  }
`

const ShadowElement = styled("div")`
  height: 50px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#10272f),
    color-stop(100%, transparent)
  );
`

const HeadMovieInfo: React.FC = () => {
  return (
    <Container>
      <InfoContainer sm="5">
        <RatingContainer>
          <Stars isRated={true} />
          <Stars isRated={true} />
          <Stars isRated={true} />
          <Stars isRated={true} />
          <Stars isRated={false} />
        </RatingContainer>
        <TypeOfMovieContainer>
          <TypeOfMovieEl>DRAMA</TypeOfMovieEl>
          <TypeOfMovieEl>ACTION</TypeOfMovieEl>
          <TypeOfMovieEl>SCI-FL</TypeOfMovieEl>
        </TypeOfMovieContainer>
        <WatchContainer>
          <IoIosPlayCircle className="icons" />
          <IoMdAddCircle className="icons" />
        </WatchContainer>
        <Paragraph>
          Natasha Romanoff, aka Black Widow, confronts the darker parts of her
          ledger when a dangerous conspiracy with ties to her past arises.
          Pursued by a force that will stop at nothing to bring her down,
          Natasha must deal with her history as a spy, and the broken
          relationships left in her wake long before she became an Avenger.
        </Paragraph>
      </InfoContainer>
      <ShadowElement></ShadowElement>
    </Container>
  )
}

export default HeadMovieInfo
