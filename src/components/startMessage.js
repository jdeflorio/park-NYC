import styled from "styled-components";
import bgImg from '../locationImages/nycBackground.jpg'

const StartMessageContatiner = styled.div`
  display: grid;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const BgImg = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: fill;
`

const TextContainer = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`;

const Title = styled.h1`
  margin-top: 275px;
`;

const Description = styled.h2`

`;

const ButtonContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  padding: 15px 20px;
  width: 6rem;
  border-radius: 5px;
  background: #216EC3;
  transition: background 0.3s ease-in-out;
  border: none;
  cursor: pointer;
  &:hover {
    background: #2C5C91;
  }
`;

function StartMessage({ setShowLocations }) {

  const handleClick = () => {
    setShowLocations(true);
  }

  return(
    <StartMessageContatiner>
      <TextContainer>
          <Title>Welcome To ParkNYC!</Title>
          <Description>Browse nearby parking garages to find the perfect spot to park</Description>
          <Description>Click the button below to start</Description>
          <ButtonContainer onClick={handleClick}>Start</ButtonContainer>
      </TextContainer>
      <BgImg src={bgImg}></BgImg>
    </StartMessageContatiner>

  )
}

export default StartMessage;