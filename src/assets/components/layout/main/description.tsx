import {StyledContainer} from "../../styled/Container.tsx";
import {FlexContainer} from "../../styled/FlexContainer.tsx";
import styled from "styled-components";
import bambooCap from "/public/bamboo-cap.png";
type Props = {
    id: string;
}

export const Description = (props: Props) => {
    return (
        <DescriptionContainerStyled id={`${props.id}`}>
            <StyledContainer>
                <FlexContainer justifyContent="space-between" flexDirection="row" alignItems="center">
                    <img src={bambooCap} alt="bamboo-man"/>
                    <div style={{ maxHeight: 400, maxWidth: '40%'}}>
                    <FlexContainer justifyContent="space-between" flexDirection="column" alignItems="start">
                        <h2>The Backstage of the Wilderness World.</h2>
                        <p>The site was founded on the basis of a volunteer movement to protect and care for
                            animals.</p>
                        <h3>How it works </h3>
                        <p>The main goal is to help the animals, as well as the nature reserves and zoos where they are
                            kept. We are currently working on video projects targeting pandas in China, eagles on an
                            island near Los Angeles, alligators in Florida and gorillas in the Congo. These have a total
                            of more than 1,500 mammals and reptiles.</p>
                    </FlexContainer>
                    </div>

                </FlexContainer>
            </StyledContainer>
        </DescriptionContainerStyled>
    );
};

const DescriptionContainerStyled = styled.div`
    height: 730px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
   
        h2, h3 {
        font-size: 1.5rem;
        font-weight: 200;
            margin: 0;
            letter-spacing: 1px;
    }
    h2 {
        font-size: 2.5rem;
    }

`