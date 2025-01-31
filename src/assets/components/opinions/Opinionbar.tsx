
import {Opinion} from "./Opinion.tsx";
import {OpinionType} from "../layout/main/opinions.tsx";
import styled from "styled-components";



type BarProps = {
    opinions: OpinionType[]
}

export const OpinionBar = ( props: BarProps) => {
    return (
        <BarContainer>

            {props.opinions.map((item) => (
                <Opinion key={item.id} name={item.name} id={item.id} svg={item.svg} content={item.content}
                         location={item.location}
                />
            ))
            }
        </BarContainer>
    );
};

const BarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    @media (max-width: 768px) {
    flex-direction: column;
        margin-top: 30px;
}
    
`
