import styled from "styled-components";
import {media} from "../../../styles/breakpoints.ts";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1280px;
    margin: 0 auto;
    height: 100%;
    @media ${media.mobile} {
        max-width: 530px;
        width: 100%

    }
`