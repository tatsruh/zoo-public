import {MenuItem} from "./MenuItem.tsx";
import {FlexContainer} from "../styled/FlexContainer.tsx";
import styles from '../../../styles/mainModule.module.css'

const Menu = () => {
    const menuItems = [
        {id: 1, name: "About", desc: "watch"},
        {id: 2, name: "Opinions", desc: "opinions"},
        {id: 3, name: "Zoos", desc: 'animals'},
        {id: 4, name: "Donate", desc: 'feed'},
        {id: 5, name: "Contact us", desc: "footer"},
    ];

    return (
        <FlexContainer flexDirection="row" alignItems="center" justifyContent="space-between" as={"ul"}
                       className={styles.disappear}>
            {menuItems.map((item) => (
                <MenuItem desc={item.desc} active={item.id === 1 && true} key={item.id} name={item.name}/>
            ))}
        </FlexContainer>
    );
};

export default Menu;