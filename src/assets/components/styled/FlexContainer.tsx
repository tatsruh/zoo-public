import styled from "styled-components";
type FlexContainerProps = {
    flexDirection: string
    alignItems: string
    justifyContent: string
    width?: string | number

}
export const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    height: 100%;
    max-width: 100%;
    width: ${props => props.width};
    flex-direction: ${props => props.flexDirection};
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
    flex-wrap: wrap;
    margin: 0
    
`;