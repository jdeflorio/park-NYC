import styled from "styled-components";

const NavBarContainer = styled.nav`
  position: fixed;
  width: 100%;
  color: white;
  background: #36454F;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Title = styled.h1`
    font-size: 3rem;
    padding-left: 1rem;
    margin: 0;

    &:hover {
    cursor: pointer;
  }
  
`;

function NavBar({ setShowLocations }) {

  const handleClick = () => {
    setShowLocations(false);
  }

  return (
    <NavBarContainer>
      <Title onClick={handleClick}>ParkNYC</Title>  
    </NavBarContainer>
  )
}

export default NavBar;