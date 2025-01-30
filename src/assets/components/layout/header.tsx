import styled from "styled-components";
import {StyledContainer} from "../styled/Container.tsx";
import Logo from "../logo.tsx";
import Menu from "../menu/Menu.tsx";
import {FlexContainer} from "../styled/FlexContainer.tsx";

export const Header = () => {
    return (
        <HeaderWrapper>
            <StyledContainer>
                <FlexContainer flexDirection="row" justifyContent="space-between" alignItems="center">
                    <FlexContainer flexDirection="row" justifyContent="space-between" alignItems="center" >
                    <Logo></Logo>
                    <Menu></Menu>
                        <StyledSpan>Designed by ©</StyledSpan>

                    </FlexContainer>
                </FlexContainer>

            </StyledContainer>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.div`
    height: 80px;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const StyledSpan = styled.span`
margin-left: 50px`