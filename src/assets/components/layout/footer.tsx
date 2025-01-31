import styled from "styled-components";
import {StyledContainer} from "../styled/Container.tsx";
import Logo from "../logo.tsx";
import {FlexContainer} from "../styled/FlexContainer.tsx";
import {MainButton} from "../buttons/MainButton.tsx";
import SocialMedias from "../social-medias/SocialMedias.tsx";
import SubscribeForm from "../subscribe/SubscribeForm.tsx";
import {media} from "../../../styles/breakpoints.ts";

type Props = {
    id: string;
}

export const Footer = (props: Props) => {
    return (
        <FooterWrapper id={`${props.id}`}>
            <StyledContainer>
                <FlexContainer flexDirection="row" justifyContent="space-between" alignItems="center" width={"100%"}>
                    <FlexContainer flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"}>
                        <Logo></Logo>
                        <MainButton width={'300px'} text={'Donate For Volunteers'} onClick={() => {
                        }}></MainButton>
                        <SocialMedias></SocialMedias>
                    </FlexContainer>
                    <SubscribeForm></SubscribeForm>
                </FlexContainer>

            </StyledContainer>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.div`
    height: 440px;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media ${media.mobile} {
        height: 100%;
    }
  
`