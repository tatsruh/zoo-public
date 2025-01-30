import styled from "styled-components";
import {StyledContainer} from "../../styled/Container.tsx";
import {FlexContainer} from "../../styled/FlexContainer.tsx";
import {MainButton} from "../../buttons/MainButton.tsx";
import Carousel from "../../carousel/Carousel.tsx";
type Props = {
    id: string;
}
const FeedPage = (props: Props) => {

    return (
        <FeedPageContainter id={`${props.id}`}>
            <StyledContainer>
                <FlexContainer flexDirection="column" alignItems="center" justifyContent="center">
                    <CarouselContainer>
                        <h2>Pick and feed a friend</h2>
                        <h4>We know the animals bring you joy, and in these extraordinary times, we’re glad.</h4>
                        <div>
                            <p>During a time when the COVID-19 epidemic is touching all of our lives, we’re proud and
                                glad
                                that people around the world find joy in PetStory.</p>
                            <p>Even though the zoo has reopened, we need you now more than ever to help us deal with
                                these
                                problems. Please consider a gift to our Emergency Support Fund . </p></div>

                        <h3>How it works</h3>

                        <Carousel></Carousel>

                        <MainButton width='300px' text="Feed a friend now" onClick={() => {
                        }}></MainButton>

                    </CarouselContainer>

                </FlexContainer>

            </StyledContainer>
        </FeedPageContainter>
    );
};


const FeedPageContainter = styled.div`
    height: 1004px;
    display: block;
    background-color: rgba(254, 189, 171, 1);
    background-image: linear-gradient(334deg, rgba(254, 189, 171, 1) 0%, rgba(51, 59, 65, 0) 50%, rgba(254, 210, 144, 1) 100%);



`
const CarouselContainer = styled.div`
    max-width: 1160px;
    max-height: 835px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    h2, h3 {
        font-weight: 200;
        letter-spacing: 1px;
        font-size: 2rem;
        text-align: center;
        margin: 0;
    }

    h2 {
        font-size: 2.5rem;
        color: #FE9013

    }

    h4 {
        color: #333B41;
        font-weight: 200;
        font-size: 1.5rem;
    }

    p {
        font-weight: bold;
    }

    p + p {
        font-weight: normal;
    }

    button {
        margin: 0 auto;
        display: block;
    }
`
export default FeedPage;