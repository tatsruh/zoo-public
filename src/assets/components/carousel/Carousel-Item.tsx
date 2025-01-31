import styled from "styled-components";


type ItemProps = {
    src: string;
}

const CarouselItem = (props: ItemProps) => {
    return (
        <ItemContainer>
            <img src={props.src} alt="item"/>
        </ItemContainer>
    );
};
const ItemContainer = styled.div`
    width: 165px;
    height: 165px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #F9804B;
    border-radius: 5px;
`
export default CarouselItem;