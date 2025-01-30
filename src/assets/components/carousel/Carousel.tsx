import CarouselItem from "./Carousel-Item.tsx";
import styled from "styled-components";

const Carousel = () => {
    return (

        <CarouselContainer>
            <CarouselItem src={'pay'}></CarouselItem>
            <img src={'./src/assets/svg-elements/Vector.svg'} alt="arrow"/>
            <CarouselItem src={'zoo'}></CarouselItem>
            <img src={'./src/assets/svg-elements/Vector.svg'} alt="arrow"/>

            <CarouselItem src='monkey'></CarouselItem>

        </CarouselContainer>

    );
};
const CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 60px;
    margin-top: 30px;
    img {
        margin: 0 30px 
    }
`
export default Carousel;