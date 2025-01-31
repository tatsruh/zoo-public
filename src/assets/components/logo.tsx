import styled from "styled-components";
import img from '/public/PetStoryonline.svg'

const Logo = () => {
    return (

            <StyledLogoSVG src={img} alt="Logo" />
    );
};


const StyledLogoSVG = styled.img`
    border: 3px solid white;
    padding: 7px

`


export default Logo;