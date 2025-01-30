import styled from "styled-components";
import {FlexContainer} from "../styled/FlexContainer.tsx";
import {CardType} from "../layout/main/animals.tsx";


export const Card = (props: CardType) => {
    return (
        <CardStyled>
            <CardImgStyled src={props.image} alt={props.title}/>
            <FlexContainer justifyContent="space-around" alignItems="center" flexDirection="row"
            width="100%">
                <div>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>


            <CardIconStyled src={props.icon} alt={props.title}/>
            </FlexContainer>
        </CardStyled>
    );
};

const CardStyled = styled.div`
    width: 366px;
    height: 426px;
    display: flex;
    flex-direction: column;
    align-items: start;
    border: 2px solid #F9804B;
    border-radius: 5px;
    h4 {
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 300;
        margin: 0;
        
    }
    p {
        margin: 0;
        color: darkgray;

    }
    margin-bottom: 20px;

`
const CardImgStyled = styled.img`
    width: 366px;
    height: 366px;
`
const CardIconStyled = styled.img``
