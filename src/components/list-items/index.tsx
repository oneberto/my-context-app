import React from "react";
import Item from "../item";
import { Styles } from "./styles";
import Button from "../button";
import { useAppContext } from "../../context/hook";

const ListItems = () => {
    const { state, createNewItem } = useAppContext();

    return (
        <Styles.Container>
            <Button onClick={createNewItem}>Create new person</Button>
            {state.items.map((item, index) => (
                <Item key={item.id} position={index} {...item} />
            ))}
        </Styles.Container>
    );
};

export default ListItems;
