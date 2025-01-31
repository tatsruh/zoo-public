import {StyledContainer} from "../../styled/Container.tsx";
import styled from "styled-components";
import {MainButton} from "../../buttons/MainButton.tsx";
import {OpinionBar} from "../../opinions/Opinionbar.tsx";
import {v1} from "uuid";
import {useEffect, useState} from "react";
import {FlexContainer} from "../../styled/FlexContainer.tsx";
import {ProgressBar} from "../../opinions/ProgressBar.tsx";
import img1 from '/public/kjki.svg';
import img2 from '/public/ojo.svg';
import img3 from '/public/user_icon.svg';
import img4 from '/public/efe.svg'




export type OpinionType = {
    id: string;
    name: string;
    location: string;
    content: string;
    svg: string;
}
type Props = {
    id: string;
}
const Opinions = (props: Props) => {
    const opinions: OpinionType[] = [
        {
            id: v1(),
            name: "Alice",
            location: "Spain",
            svg: img1,
            content: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
        },
        {
            id: v1(),
            name: "Michael",
            location: "Austria",
            svg: img3,
            content: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
        },
        {
            id: v1(),
            name: "Michael John",
            location: "Russia",
            svg: img4,
            content: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
        },
        {
            id: v1(),
            name: "Krzysztof",
            location: "Germany",
            svg: img2,
            content: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
        },
        {
            id: v1(),
            name: "Michael John",
            location: "Austria",
            svg: img4,
            content: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
        },
        {
            id: v1(),
            name: "Julia",
            location: "USA",
            svg: img1,
            content: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
        },
        {
            id: v1(),
            name: "Sebastian",
            location: "USA",
            svg: img3,
            content: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
        },
        {
            id: v1(),
            name: "Kevin",
            location: "Russia",
            svg: img2,
            content: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
        },
        {
            id: v1(),
            name: "Krzysztof",
            location: "Germany",
            svg: img4,
            content: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
        },
        {
            id: v1(),
            name: "Michael John",
            location: "Austria",
            svg: img2,
            content: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
        },
        {
            id: v1(),
            name: "Julia",
            location: "USA",
            svg: img3,
            content: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
        },
        {
            id: v1(),
            name: "Sebastian",
            location: "USA",
            svg: img4,
            content: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
        }
    ]
    const [startNumber, setStartNumber] = useState(0); // Начальный индекс
    const [state, setState] = useState<OpinionType[]>(opinions.slice(0, 4));
    const [disabled1, setDisabled1] = useState(true)// Первые 4 элемента
    const [disabled2, setDisabled2] = useState(false)// Первые 4 элемента
    const [width, setWidth] = useState<number>(25)
    useEffect(() => {
        if (startNumber === 0) {
            setDisabled1(true);
        } else if (startNumber + 4 === opinions.length) {
            setDisabled2(true);
        }
    }, [opinions, startNumber]);

    useEffect(() => {
        const per = 100/opinions.length;
        const num = (per* (startNumber+4)); // Avoid division by zero
        setWidth(num);
    }, [opinions, startNumber]);

    const rightButton = () => {
        const newStartNumber = startNumber + 4;
        if (newStartNumber < opinions.length) {
            setStartNumber(newStartNumber);
            setState(opinions.slice(newStartNumber, newStartNumber + 4));
            setDisabled1(false);
        } else {
            setDisabled2(true);
        }
    };

    const leftButton = () => {
        const newStartNumber = startNumber - 4;
        if (newStartNumber >= 0) {
            setStartNumber(newStartNumber);
            setState(opinions.slice(newStartNumber, newStartNumber + 4));
            setDisabled2(false);
        } else {
            setDisabled1(true);
        }
    };

    return (
        <OpinionContainer id={`${props.id}`}>

            <h3>Testimonials</h3>
            <FlexContainer flexDirection="row" justifyContent={"space-around"} alignItems="center">
                <MainButton text="<" onClick={leftButton} width="54px" disabled={disabled1}></MainButton>
                <OpinionBar opinions={state}></OpinionBar>
                <MainButton text=">" onClick={rightButton} width="54px" disabled={disabled2}></MainButton>
            </FlexContainer>

            <StyledContainer>
                <ProgressBar width={width}></ProgressBar>

                <MainButton text={"leave feedback"} width={"300px"} onClick={() => {
                }}></MainButton>
            </StyledContainer>

        </OpinionContainer>
    );
};
const OpinionContainer = styled.div`
    padding: 100px 0;

    h3 {
        font-weight: 200;
        letter-spacing: 1px;
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 50px;
        margin-top: 0;


    }
    button {
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 10px;
    }
`
export default Opinions;