import {StyledContainer} from "../../styled/Container.tsx";
import styled from "styled-components";
import {FlexContainer} from "../../styled/FlexContainer.tsx";
import {MainButton} from "../../buttons/MainButton.tsx";
import background from "/public/giantPanda.png"
import styles from '../../../../styles/mainModule.module.css'
type Props = {
    id: string;
}
export const WatchAnimal = (props: Props) => {
    return (
        <WatchAnimalContainer id={`${props.id}`}>
            <StyledContainer>
                <FlexContainer flexDirection="row"
                               alignItems="center"
                               justifyContent="space-between" >
                <div className={styles.disappear}></div>
                <FlexContainer flexDirection="column"
                               alignItems="center"
                               justifyContent="center"
                               width="50%"
                >
                    <h1>Watch your <span style={{color:'yellow'}}>favorite</span> animal online</h1>
                    <MainButton width={"300px"} onClick={()=> {}} text={'WATCH ONLINE'}></MainButton>
                </FlexContainer>
                </FlexContainer>
            </StyledContainer>
        </WatchAnimalContainer>
    );
};

const WatchAnimalContainer = styled.div`
    height: 700px;
    background-image: url(${background});
    background-size: cover; /* Чтобы изображение растягивалось по контейнеру */
    background-position: center; /* Центрирование изображения */
    display: block;

    h1 {
        color: white;
        font-size: 80px;
        font-weight: bold;
        max-width: 500px;
        text-align: center;
        text-transform: uppercase;
        line-height: 75%;
        letter-spacing: 0;
    }
`
