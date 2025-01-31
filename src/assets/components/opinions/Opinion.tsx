import styled from "styled-components";
import {FlexContainer} from "../styled/FlexContainer.tsx";
import {OpinionType} from "../layout/main/opinions.tsx";

export const Opinion = (props: OpinionType) => {
    return (
        <OpinionContainer>
            <FlexContainer flexDirection={"column"} justifyContent={"center"} alignItems={"start"}>
                <FlexContainer flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
                    <img src={props.svg} alt="avatar"/>
                    <div>
                        <div> <NameStyled>{props.name}</NameStyled> </div>

                        <div>
                            <span>{props.location}</span>
                            <span>{new Date().getFullYear()}</span></div>
                    </div>
                </FlexContainer>
                <p>{props.content}</p>
            </FlexContainer>
        </OpinionContainer>
    );
};

const OpinionContainer = styled.div`
    max-width: 266px;
    max-height: 390px;
    background-color: #F1F3F2;
    border: 2px solid #F9804B;
    border-radius: 15px;
    padding: 20px 0;
    margin-bottom: 20px;

    span {
       margin-right: 10px;
        color: #BDBDBD
    }

    img {
        margin-right: 20px;
        margin-left: 20px;
    }

    p {
        margin: 20px;
        color: #767474;
        font-size: 14px;
        font-weight: 200;
    }


`
const NameStyled = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;
    text-align: start;
    
`

