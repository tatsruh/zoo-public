
import {Card} from "./Card.tsx";
import {FlexContainer} from "../styled/FlexContainer.tsx";
import {CardType} from "../layout/main/animals.tsx";

type CardsComponentProps = {
    cards: CardType[];
}

const Cards = (props: CardsComponentProps) => {


    return (
        <FlexContainer flexDirection="row" justifyContent="space-between" alignItems="center" width="1280px">
            {props.cards.map((item: CardType) => (
                <Card key={item.id} title={item.title} description={item.description} image={item.image} id={item.id}
                      icon={item.icon}/>
            ))}
        </FlexContainer>
    );
};

export default Cards;