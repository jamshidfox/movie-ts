import React from "react"
import styled from "styled-components"
import { Row, Col } from "reactstrap"
import { PlusCircle, Youtube } from "react-feather"
import theme from "../../constants/theme"

const Container = styled(Row)`
  min-height: 40rem;
  background-image: url("https://images4.alphacoders.com/761/76146.jpg");
  margin: 0;
  background-size: cover;
  color: pink;
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    background-image: url("https://s3-alpha-sig.figma.com/img/6115/1284/ab8e0632bc53aad0618e87caa55f64f8?Expires=1673827200&Signature=KcHt4p--11GMpcFvTJTOc-CTMr~FwmYjetSlVxh0KXfjVXXg46CaYHkkdhKAuSClhDMRXchN80KU1O9mauQt80mmLY8kdF2QKUNI9CDkNRlnOZz0TM5aZUtNGvG8ZGzLN4lPjwr1gUruqddWkU-96rbNOpwxaXIk4SEu5l8S7MRa2YKASJutpnPqfUOojGWWeg~dhFGMcwcwhe86KOvRv6nVj~Z0XKSRDnbVcrz0Z1GiG5L6qk~TtdsLciIvFgwTIlZRea41VotT6ryS~JkxYB0kzlA~ilYNUgf-VkmUKg3oIzMf-45U1i6PWxJc~VXTVFXmM9gB8FXmYrPz0i~LuQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 85%;
  }
  resize: both;
`
const InfoContainer = styled(Col)`
  padding: 2rem 0rem 0rem 3rem;
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem 0rem 0rem 2rem;
    align-items: center;
  }
`
const MovieTitle = styled.h1`
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 2rem;
  letter-spacing: 0.1em;
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    display: none;
  }
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
  & > :last-child {
    border: none;
    padding: 0;
    margin: 0;
  }
`

const TypeOfMovieEl = styled.div`
  padding: 0rem 2rem 0rem 0rem;
  margin-right: 2rem;
  border-right: 0.1rem solid white;
  width: fit-content;
`
const WatchContainer = styled.div`
  margin-top: 2rem;
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    display: none;
  }
`
const Paragraph = styled.p`
  margin-top: 2rem;
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    display: none;
  }
`

const TitleImageSub = styled("img")`
  width: 150px;
`
const TitleImage = styled("img")`
  width: 100%;
`
const TitleImageBox = styled("div")`
  display: flex;
  margin-top: 300px;
  flex-direction: column;
  align-items: center;
  width: 80%;
  @media (min-width: ${theme.mobile.mobileScreenWidth}) {
    display: none;
  }
`

const HeadMovieInfo: React.FC = () => {
  return (
    <Container>
      <InfoContainer sm="5">
        <MovieTitle>Black Widow</MovieTitle>
        <TitleImageBox>
          <TitleImageSub src="https://s3-alpha-sig.figma.com/img/15f3/76c3/d66107a59010b631999b057f0a39f3fb?Expires=1673827200&Signature=CceazhlVH2~cuu~4~hPF5qivqiXwB4fh14RXZTJNHvMmRA5mCwOhJLLM1J18wfdF7xacslB8aOJMFpCI5bsEL8CqQ4Rn18PNKGgkqS1p31t6xjIiWjXUdtaHKH6ue6bAfnM3BNvZD5vVIoqj7UWdZiCqExpgAMBppJKYtuM1tG8oS0DbOKPQWuFDPoaTV8kXZx1fpRdKC6tKKnWUP96kGGfigJQdhhZJWPQnuRmaLBNhPdxZqxMEXYvHAK8KOgogj5Jwkrn4iGN~p5Ngj2an-Vi9y~yZbYcsm9WZpCUNRJcKgxVoaXfOtaltGBgrwd199Ji-ExiQAWJoxGz5duifCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <TitleImage src="https://s3-alpha-sig.figma.com/img/3b7b/af0b/cc180bf1f7188eaecfe580c1638e7ef8?Expires=1673827200&Signature=TTYtzCQoe9J5HrYxiN1lSU8A7F01KggHTkSvYwK394LS1EUZHsjDq0gPPiNiiX8twmMPMdVTi2kd-pL6CEzf8dkjL~LGIj8cheioD9ML3RTznPWuMK6jOXhHKNjWm0ShUZRjPXPbslVt-qhz3p37GxklNkHshdUbQsQULG~xkRj7lSXoFM1~vfmzURrSMx30qr3DcSHWALlD6RrhOU~ELtYLdGh2zVYvdCjGUfLV5cZHSSOJsxEkW-DWPD0PV6FiD01LLE1RgImv1s1ZDjkDItqPefO~aOHGDiEKUR9JlzKNOsc6-850FuHLh5bz3pgsT1I9tsQmeOK76U3GIQbCSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </TitleImageBox>
        <RatingContainer>
          <Stars />
          <Stars />
          <Stars />
          <Stars />
        </RatingContainer>
        <WatchContainer>
          <Youtube size={55} style={{ marginRight: "1rem" }} />
          <PlusCircle size={55} />
        </WatchContainer>
        <TypeOfMovieContainer>
          <TypeOfMovieEl>Drama</TypeOfMovieEl>
          <TypeOfMovieEl>Action</TypeOfMovieEl>
          <TypeOfMovieEl>SCI-FL</TypeOfMovieEl>
        </TypeOfMovieContainer>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam
          minima, voluptates cum facere commodi nam cupiditate. Molestias dolore
          sapiente, nisi cumque debitis veniam doloremque. Qui ipsam dolore
          expedita tenetur.
        </Paragraph>
      </InfoContainer>
    </Container>
  )
}

export default HeadMovieInfo
