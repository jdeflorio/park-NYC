import styled from "styled-components";

const LocationTileContainer = styled.div`
  display: flex;
  border: 1px black solid;
  width: 20rem;
  height: 30rem;
  border-radius: 20px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

const BgImg = styled.img`
  height: 100%;
  width: 100%;
`

const LocationPane = styled.div`
  position: absolute;
  height: inherit;
  width: inherit;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: inherit;
  overflow: hidden;
`;

const LocationData = styled.div`
  color: white;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const LocationTitle = styled.h2`
  color: white;
  font-size: 1.3rem;
  text-align: center;
  margin-top: 0;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const LocationPrice = styled.span`
  font-size: 1.8rem;
`;

const LocationAvailability = styled.span`
  font-size: 1.3rem;
`;





function LocationTile({name, price, openings, imgSrc, description, mapsSrc, setParkingSpotData}) {

  const handleClick = () => {
    setParkingSpotData({name, price, openings, imgSrc, description, mapsSrc});
  }

  return(
    <LocationTileContainer onClick={handleClick}>
      <BgImg src={imgSrc}></BgImg>
      <LocationPane>
        <LocationTitle>{name}</LocationTitle>
          <LocationData>
            <LocationPrice>{price}</LocationPrice>
            <br></br>
            <LocationAvailability>{openings} Spots Open</LocationAvailability>
          </LocationData>
        </LocationPane>
    </LocationTileContainer>
  )
}

export default LocationTile;