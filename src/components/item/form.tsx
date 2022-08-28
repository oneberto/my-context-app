import React from "react";
import Button from "../button";
import { CloseIcon } from "../icons/close";
import { SaveIcon } from "../icons/save";
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
                <Button onClick={onSubmit}>
                    <CloseIcon />
                </Button>
            </Styles.GroupButtons>
        </>
    );
};

export default ItemForm;
