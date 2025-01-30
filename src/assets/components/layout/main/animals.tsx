import styled from "styled-components";
import {FlexContainer} from "../../styled/FlexContainer.tsx";
import {MainButton} from "../../buttons/MainButton.tsx";
import {StyledContainer} from "../../styled/Container.tsx";
import Cards from "../../cards/Cards.tsx";
import {v1} from "uuid";
import {useState} from "react";


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
            image: "/public//pandas.png",
            icon: "/public/banana-bamboo_icon.png"
        },
        {
            id: v1(), title: "Eagles", description: "Native to South America", image: "/public/eagle.png",
            icon: "/public//meet-fish_icon.png"
        },
        {
            id: v1(), title: "Gorillas", description: "Native to Congo", image: "/public/gorilla.png",
            icon: "/public/banana-bamboo_icon.png"
        },
        {
            id: v1(),
            title: "Two-toed Sloth",
            description: "Mesoamerica, South America",
            image: "/public/leniwiec.png",
            icon: "/public/banana-bamboo_icon.png"
        },
        {
            id: v1(),
            title: "cheetahs",
            description: "Native to Southwest China",
            image: "/public/gepard.png",
            icon: "/public/meet-fish_icon.png"
        },
        {
            id: v1(), title: "Penguins", description: "Native to Antarctica", image: "/public/penguin.png",
            icon: "/public/meet-fish_icon.png"
        },
        {
            id: v1(), title: "Lions", description: "Native to Africa", image: "/public/lion.jpeg",
            icon: "/public/meet-fish_icon.png"
        },
        {
            id: v1(), title: "Elephants", description: "Native to Africa", image: "/public/elephant.jpeg",
            icon: "/public/banana-bamboo_icon.png"
        },
        {
            id: v1(), title: "Tucan", description: "Native to Africa", image: "/public/tucan.jpg",
            icon: "/public/meet-fish_icon.png"
        },
        {
            id: v1(), title: "Monkey", description: "Native to Asia", image: "/public/monkey.jpeg",
            icon: "/public/banana-bamboo_icon.png"
        },
        {
            id: v1(), title: "Gnu", description: "Native to Africa", image: "/public/gnu.jpeg",
            icon: "/public/banana-bamboo_icon.png"
        },
        {
            id: v1(), title: "Giraffe", description: "Native to Africa", image: "/public/giraffe.jpg",
            icon: "/public/banana-bamboo_icon.png"
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