import styled from "styled-components";

const PopUpContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  color: #082c6c;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

const PopUpBox = styled.div`
  position: relative;
  padding: 32px;
  max-width: 75%;
  width: 60rem;
  height: 40rem;
  background: white;
  color: #082c6c;
  border-radius: 10px;
  border: 2px solid black;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin: 8px 10px 0 0;
  font-size: 20px;
`;

const PurchaseForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;

`;

const InputContainer = styled.div`
  margin-top: 35px;
  display: grid;
  gap: 0px;
  row-gap: 0px;
  justify-content: center;
`;

const InputLabel = styled.label`
  color: black;

`;

const FormInput = styled.input`
  border: 1px solid grey;
  background: none;
  outline: none;
  color: inherit;
  font-size: 1rem;
  height: 10px;
  padding: 5px 5px 10px;
  border-bottom: 1px solid black;
`;

const SubmitButton = styled.div`
  margin-top: 50px;
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
  text-align: center;
  color: white;
`;

const ParkingSpotDataContainer = styled.div`
  height: 50%;
  display: flex;
`;

const BgImg = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 20px;
  border: 2px solid #2C5C91;
`

const ParkingSpotInfo = styled.div`
  margin-left: 10px;
`;

const GoogleMap = styled.iframe`
  display: block;
  width: "600";
  height: "450";
  border: 0;
`

const Title = styled.h1`
  margin: 0;
`





function BuySpotPopup({ parkingSpotData, setParkingSpotData}) {

  const {name, price, imgSrc, description, mapsSrc} = parkingSpotData;

  const handleCloseButton = () => {
    setParkingSpotData(null);
  }

  const handleSubmit = () => {
    setParkingSpotData(null);
  }

  return(
    <PopUpContainer>
      <PopUpBox>
        <CloseButton onClick={handleCloseButton}>X</CloseButton>
        <ParkingSpotDataContainer>
          <BgImg src={imgSrc}></BgImg>
          <ParkingSpotInfo>
            <Title>{name}</Title>
            <h2>{price}</h2>
            <p>{description}</p>
            <GoogleMap src={mapsSrc}></GoogleMap>
          </ParkingSpotInfo>
        </ParkingSpotDataContainer>
        <PurchaseForm>
          <InputContainer>
            <InputLabel>First Name</InputLabel>
            <FormInput
              placeholder=""
            ></FormInput>
          </InputContainer>

          <InputContainer>
            <InputLabel>Last Name</InputLabel>
            <FormInput
                placeholder=""
            ></FormInput>
            </InputContainer>

          <InputContainer>
            <InputLabel>License Plate</InputLabel>
            <FormInput
              placeholder="ABC-1234"
            ></FormInput>
          </InputContainer>

          <InputContainer>
            <InputLabel>Phone Number</InputLabel>
            <FormInput
              placeholder="123-456-7890"
            ></FormInput>
          </InputContainer>

          <InputContainer>
            <InputLabel>From</InputLabel>
            <FormInput
              type="datetime-local"
            ></FormInput>
          </InputContainer>

          <InputContainer>
            <InputLabel>To</InputLabel>
            <FormInput
              type="datetime-local"
            ></FormInput>
          </InputContainer>
        </PurchaseForm>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </PopUpBox>
    </PopUpContainer>
  )
}

export default BuySpotPopup;