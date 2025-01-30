import styled from "styled-components";

type MenuItemProps = {
    name: string;
    active: boolean;
}

export const MenuItem = ({name, active}: MenuItemProps) => {
    return (
        <StyledListItem active={active}>{name}</StyledListItem>
    )
}

const StyledListItem = styled.li<{ active: boolean }>`
    list-style: none;
    margin-left: 57px;
    color: ${({active}) => (active ? 'orange' : 'white')};
    &:hover {
        color: orange;
        cursor: pointer;
    }

`