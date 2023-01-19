import styled from "styled-components";
import LocationTile from "./LocationTile";

const ParkingLocationsContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const LocationsDiv = styled.div`
  align-items: center;
  justify-content: center;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
  padding-top: 100px;
  padding-bottom: 50px;
`

function ParkingLocations(props) {

  const locations = props.locations;

  

  return(
    <ParkingLocationsContainer>
      <Title>Popular Locations</Title>
      <LocationsDiv>
        {locations.map((location) => (
          <LocationTile
            name={location.name}
            price={location.price}
            openings={location.openings}
            imgSrc={location.img}
            setParkingSpotData={props.setParkingSpotData}
          />
        ))}
      </LocationsDiv>
    </ParkingLocationsContainer>
  )
}

export default ParkingLocations;