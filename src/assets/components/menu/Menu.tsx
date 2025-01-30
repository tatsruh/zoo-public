import {MenuItem} from "./MenuItem.tsx";
import {FlexContainer} from "../styled/FlexContainer.tsx";

const Menu = () => {
    const menuItems = [
        { id: 1, name: "About" },
        { id: 2, name: "Map" },
        { id: 3, name: "Zoos" },
        { id: 4, name: "Donate" },
        { id: 5, name: "Contact us" }
    ];

    return (
        <FlexContainer flexDirection="row" alignItems="center" justifyContent="space-between" as={"ul"}>
            {menuItems.map((item) => (
                <MenuItem active={item.id === 1 && true} key={item.id} name={item.name}/>
            ))}
        </FlexContainer>
    );
};

export default Menu;