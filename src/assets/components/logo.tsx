import styled from "styled-components";
import img from '/public/PetStoryonline.svg'
import {media} from "../../styles/breakpoints.ts";

const Logo = () => {
    return (

            <StyledLogoSVG src={img} alt="Logo" />
    );
};


const StyledLogoSVG = styled.img`
    border: 3px solid white;
    padding: 7px;
    @media ${media.mobile} {
    margin: 10px
}

`


export default Logo;