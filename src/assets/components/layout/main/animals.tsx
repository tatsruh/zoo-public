import styled from "styled-components";
import {FlexContainer} from "../../styled/FlexContainer.tsx";
import {MainButton} from "../../buttons/MainButton.tsx";
import {StyledContainer} from "../../styled/Container.tsx";
import Cards from "../../cards/Cards.tsx";
import {v1} from "uuid";
import {useState} from "react";
import panda from '/public/pandas.png'
import bamboo from "/public/banana-bamboo_icon.png"
import meat from "/public//meet-fish_icon.png"
import eagle from "/public/eagle.png"
import gorilla from "/public/gorilla.png"
import leniwiec from "/public/leniwiec.png"
import gepard from "/public/gepard.png"
import penguin from "/public/penguin.png"
import lion from "/public/lion.jpeg"
import elephant from "/public/elephant.jpeg"
import tucan from "/public/tucan.jpg"
import monkey from "/public/monkey.jpeg"
import gnu from "/public/gnu.jpeg"
import giraffe from "/public/giraffe.jpg"




export type CardType = {
    id: string;
    title: string;
    description: string;
    image: string;
    icon: string;
}
type CardsType = Array<CardType>
type Props = {
    id: string;
}

export const Animals = (props: Props) => {
    const cards: CardsType = [
        {
            id: v1(),
            title: "Giant Pandas",
            description: "Native to Southwest China",
            image: panda,
            icon: bamboo
        },
        {
            id: v1(), title: "Eagles", description: "Native to South America", image: eagle,
            icon: meat
        },
        {
            id: v1(), title: "Gorillas", description: "Native to Congo", image: gorilla,
            icon: bamboo
        },
        {
            id: v1(),
            title: "Two-toed Sloth",
            description: "Mesoamerica, South America",
            image: leniwiec,
            icon: bamboo
        },
        {
            id: v1(),
            title: "cheetahs",
            description: "Native to Southwest China",
            image: gepard,
            icon: meat
        },
        {
            id: v1(), title: "Penguins", description: "Native to Antarctica", image: penguin,
            icon: meat
        },
        {
            id: v1(), title: "Lions", description: "Native to Africa", image: lion,
            icon: meat
        },
        {
            id: v1(), title: "Elephants", description: "Native to Africa", image: elephant,
            icon: bamboo
        },
        {
            id: v1(), title: "Tucan", description: "Native to Africa", image: tucan,
            icon: meat
        },
        {
            id: v1(), title: "Monkey", description: "Native to Asia", image: monkey,
            icon: bamboo
        },
        {
            id: v1(), title: "Gnu", description: "Native to Africa", image: gnu,
            icon: bamboo
        },
        {
            id: v1(), title: "Giraffe", description: "Native to Africa", image: giraffe,
            icon: bamboo
        }
    ]
    const [startNumber, setStartNumber] = useState(0);
    const [sliceNumber, setSliceNumber] = useState<number>(6);
    const [state, setState] = useState<CardType[]>(cards.slice(0, 6));
    const [disabled1, setDisabled1] = useState<boolean>(true);
    const [disabled2, setDisabled2] = useState<boolean>(false);
   console.log(startNumber)
    console.log(sliceNumber)
    const rightButton = () => {
        const newStartNumber = 6;
        const newSliceNumber = 12;

        setStartNumber(newStartNumber);
        setSliceNumber(newSliceNumber);
        setState(cards.slice(newStartNumber, newSliceNumber)); // Обновляем на основе новых значений
        setDisabled1(false); // Активируем левую кнопку
        setDisabled2(true);  // Деактивируем правую кнопку
    };

    const leftButton = () => {
        const newStartNumber = 0;
        const newSliceNumber = 6;

        setStartNumber(newStartNumber);
        setSliceNumber(newSliceNumber);
        setState(cards.slice(newStartNumber, newSliceNumber)); // Обновляем на основе новых значений
        setDisabled1(true);  // Деактивируем левую кнопку
        setDisabled2(false); // Активируем правую кнопку
    };

    return (
        <AnimalsContainer id={`${props.id}`}>
            <div>
                <FlexContainer flexDirection="row" justifyContent="space-around" alignItems="center">
                    <FlexContainer flexDirection="column" justifyContent="center" alignItems="end">
                    <MainButton disabled={disabled1} text="<" onClick={leftButton} width="54px"></MainButton>
                    </FlexContainer>

                    <FlexContainer width="1280px" flexDirection="column" justifyContent="start" alignItems="start" >
                        <StyledContainer>
                        <Cards cards={state}></Cards>
                        </StyledContainer>
                    </FlexContainer>
                    <FlexContainer flexDirection="column" justifyContent="center" alignItems="start">
                        <MainButton disabled={disabled2} text=">" onClick={rightButton} width="54px"></MainButton>
                    </FlexContainer>
                </FlexContainer>
            </div>
            <FlexContainer flexDirection="row" justifyContent="center" alignItems="center" >
                <MainButton text="choose your favorite" onClick={()=> {}} width="300px"></MainButton>

            </FlexContainer>
        </AnimalsContainer>
    );
};

const AnimalsContainer = styled.div`

    button {
    margin-bottom: 60px;
        margin-top: 30px;
}
    
`