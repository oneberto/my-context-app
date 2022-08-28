import React from "react";
import Button from "../button";
import { SaveIcon } from "../icons/save";
import { TrashIcon } from "../icons/trash";
import Input from "../input";
import { Styles } from "./styles";

interface IProps {
    onSubmit(): void;
}

const ItemForm = ({ onSubmit }: IProps) => {
    return (
        <>
            <Input
                name="nickname"
                placeholder="Nickname"
                onChangeText={console.log}
            />

            <Input
                name="age"
                placeholder="Age"
                type="number"
                onChangeText={console.log}
            />
            <Input
                name="whatsapp"
                placeholder="Whatsapp number"
                type="number"
                onChangeText={console.log}
            />

            <Styles.GroupButtons>
                <Button onClick={onSubmit}>
                    <SaveIcon />
                </Button>
                <Button>
                    <TrashIcon />
                </Button>
            </Styles.GroupButtons>
        </>
    );
};

export default ItemForm;
