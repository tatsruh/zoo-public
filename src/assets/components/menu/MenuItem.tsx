import styled from "styled-components";
import {Link} from "react-router";

type MenuItemProps = {
    name: string;
    active: boolean;
    desc: string;
}

export const MenuItem = ({name, active, desc}: MenuItemProps) => {
    return (
        <StyledListItem active={active}>
            <Link to={`#${desc}`}>{name}</Link>
        </StyledListItem>
    )
}

const StyledListItem = styled.li<{ active: boolean }>`
    list-style: none;
    margin-left: 57px;
    color: ${({active}) => (active ? 'orange' : 'white')};
    &>a:hover {
        color: orange;
        cursor: pointer;
    }
    &>a {
        color: white;
    }

`