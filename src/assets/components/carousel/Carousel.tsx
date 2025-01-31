import CarouselItem from "./Carousel-Item.tsx";
import styled from "styled-components";
import arrow from '/public/Vector.svg'
import pay from '/public/pay.svg'
import zoo from '/public/zoo.svg'
import monkey from '/public/monkey.svg'
import styles from '../../../styles/mainModule.module.css'

const Carousel = () => {
    return (

        <CarouselContainer className={styles.disappear} >
            <CarouselItem src={pay}></CarouselItem>
            <img src={arrow} alt="arrow"/>
            <CarouselItem src={zoo}></CarouselItem>
            <img src={arrow} alt="arrow"/>

            <CarouselItem src={monkey}></CarouselItem>

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