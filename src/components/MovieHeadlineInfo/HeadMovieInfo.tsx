import React from "react"
import styled from "styled-components"
import { Row, Col } from "reactstrap"

const Container = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 40rem;
  background-size: 100% 100%;
  background-image: url("https://cdn.vox-cdn.com/thumbor/CAUv8Mbou_rQE5hhkmsK_veYAbU=/0x0:1920x1080/1200x800/filters:focal(516x102:822x408)/cdn.vox-cdn.com/uploads/chorus_image/image/58289837/black_widow.0.jpg");
  margin: 0;
  background-size: cover;
  color: pink;
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 85%;
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
`
const Paragraph = styled.p`
  margin-top: 2rem;
  width: 450px;
  font-size: 12px;
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    margin-top: 300px;
  }
`
const WatchContainerImage = styled("img")`
  width: 55px;
  height: 55px;
  margin-right: 10px;
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
        <TitleImageBox>
          <TitleImageSub src="https://s3-alpha-sig.figma.com/img/15f3/76c3/d66107a59010b631999b057f0a39f3fb?Expires=1673827200&Signature=CceazhlVH2~cuu~4~hPF5qivqiXwB4fh14RXZTJNHvMmRA5mCwOhJLLM1J18wfdF7xacslB8aOJMFpCI5bsEL8CqQ4Rn18PNKGgkqS1p31t6xjIiWjXUdtaHKH6ue6bAfnM3BNvZD5vVIoqj7UWdZiCqExpgAMBppJKYtuM1tG8oS0DbOKPQWuFDPoaTV8kXZx1fpRdKC6tKKnWUP96kGGfigJQdhhZJWPQnuRmaLBNhPdxZqxMEXYvHAK8KOgogj5Jwkrn4iGN~p5Ngj2an-Vi9y~yZbYcsm9WZpCUNRJcKgxVoaXfOtaltGBgrwd199Ji-ExiQAWJoxGz5duifCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <TitleImage src="https://s3-alpha-sig.figma.com/img/3b7b/af0b/cc180bf1f7188eaecfe580c1638e7ef8?Expires=1673827200&Signature=TTYtzCQoe9J5HrYxiN1lSU8A7F01KggHTkSvYwK394LS1EUZHsjDq0gPPiNiiX8twmMPMdVTi2kd-pL6CEzf8dkjL~LGIj8cheioD9ML3RTznPWuMK6jOXhHKNjWm0ShUZRjPXPbslVt-qhz3p37GxklNkHshdUbQsQULG~xkRj7lSXoFM1~vfmzURrSMx30qr3DcSHWALlD6RrhOU~ELtYLdGh2zVYvdCjGUfLV5cZHSSOJsxEkW-DWPD0PV6FiD01LLE1RgImv1s1ZDjkDItqPefO~aOHGDiEKUR9JlzKNOsc6-850FuHLh5bz3pgsT1I9tsQmeOK76U3GIQbCSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </TitleImageBox>
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
          <WatchContainerImage src="https://s3-alpha-sig.figma.com/img/a696/fb16/912e09903c6be4539f472f894ee36dc5?Expires=1673827200&Signature=HlVhozHYjoDplTVZ9Iudjx64OpomD4YWqVQXNMMCYTjBPRGHujlL9tXpOknUxiNDb3XwJFQNc5pCSnahgm96PUh8BuPla47KJGe~n2Z65F~XoFE6HaTrssXzO26Vi~I6-C32KiV4DEjakuPfQq2bsRiXUPfCPnO3yuTXd6T5C7TXCgDdEH4AdDF05UKgoskNkuYP9idVfCvaLHkYnmjJeL2gVY1HubocqocxadfKvFB-Lz0WWbCGWSOryFJrXPpHRrjJLmBMJj5T~eZYW5d7xx-Egpn6F3UIxq1JS-z1-tDJa2SXQ9N8IU0SzbfghsJWZDz5IBVZfu9Q2vTSvHa-sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <WatchContainerImage src="https://s3-alpha-sig.figma.com/img/810d/3c9a/a9f595d45648de4994057ef7ce47d0de?Expires=1673827200&Signature=I05LXJcWZ9nMioXJgiHSOJSUk1eORD80DhIDt-~Pqw~pGgieUmmtfhcBPvWJTU~I6JGObn6yP0V74xOPgg5CzgkpSdGuCzKLyDMoqsWDIM2OKX9BwclyIY-CjhLcLHJZzzbCUYkJOLFXSR-zEiISJ97viSvle9AJfaF2gDibewBkw7bkVpO9zW7JWaafsZ3G8t2NkE8s0mA8L3UXYp28oNxC-ZsMnf~ZJ4IBIaD-3wJlO6Ni-ZMES3IhLzUT93wvlSIal15SmT8PtR5SmZ2QOthyloPzYf4sHzQb7yN0oazYbMH1inqx2JePNbOh-9nDug7aNc45OQ6CQKy4qAniwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
