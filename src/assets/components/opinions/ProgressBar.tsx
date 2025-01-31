import styled from "styled-components";
import styles from '../../../styles/mainModule.module.css'

type ProgressBarProps = {
    width: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
    return (
        <ProgressBarContainer className={styles.disappear}>
            <ProgressBarStyled width={props.width}>
        </ProgressBarStyled>
        </ProgressBarContainer>
    );
};
const ProgressBarStyled = styled.div<ProgressBarProps>`
    width: ${({ width }) => `${width}%`};
    background-color: orange;
    border-radius: 15px;
    height: 100%;
    transition: width 0.3s ease;
`

const ProgressBarContainer = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    width: 300px;
    height: 25px;
    border-radius: 15px;
    background-color: lightgray;
    text-align: center;
    line-height: 25px;
    color: white;
    font-weight: bold;
    transition: width 0.3s ease;

`

