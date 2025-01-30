import styled from "styled-components";

const Logo = () => {
    return (

            <StyledLogoSVG src={'./src/assets/svg-elements/PetStory online.svg'}>

            </StyledLogoSVG>

    );
};


const StyledLogoSVG = styled.img`
    border: 3px solid white;
    padding: 7px

`


export default Logo;