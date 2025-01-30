import styled from "styled-components";

type ButtonProps = {
    width: string;
    text: string;
    onClick: () => void;
    disabled?: boolean;
    type?: 'submit' | 'button';
}
type StyledButtonProps = {
    width: string;

}

export const MainButton = ({text, onClick, width, disabled}: ButtonProps) => {
    return (
        <StyledButton onClick={onClick} width={width} disabled={disabled}>
            {text}
        </StyledButton>
    );
};

const StyledButton = styled.button<StyledButtonProps>`
    width: ${props => props.width};
    background-color: ${(props) => (props.disabled ? 'gray' : '#F9804B')};
    color: white;
    height: 54px;
    border-radius: 25px;
    text-transform: uppercase;


`
