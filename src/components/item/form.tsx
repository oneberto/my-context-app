import React, { useState } from "react";
import { useAppContext } from "../../context/hook";
import { IItem } from "../../interfaces/IItem";
import Button from "../button";
import { CloseIcon } from "../icons/close";
import { SaveIcon } from "../icons/save";
import Input from "../input";
import { Styles } from "./styles";

const ItemForm = ({ ...item }: IItem) => {
    const { toggleIsEditing, editItem } = useAppContext();

    const [formState, setFormState] = useState(item);

    const { nickname = "", whatsapp = "", age = "", id } = formState || {};

    return (
        <>
            <Input
                name="nickname"
                placeholder="Nickname"
                onChangeText={(v) =>
                    setFormState((old) => ({ ...old, nickname: v }))
                }
                value={nickname}
                autoFocus
            />

            <Input
                name="age"
                placeholder="Age"
                type="number"
                onChangeText={(v) =>
                    setFormState((old) => ({ ...old, age: ~~v }))
                }
                value={age}
            />
            <Input
                name="whatsapp"
                placeholder="Whatsapp number"
                type="number"
                onChangeText={(v) =>
                    setFormState((old) => ({ ...old, whatsapp: ~~v }))
                }
                value={whatsapp}
            />

            <Styles.GroupButtons>
                <Button onClick={() => editItem(formState)}>
                    <SaveIcon />
                </Button>
                <Button onClick={() => toggleIsEditing(id)}>
                    <CloseIcon />
                </Button>
            </Styles.GroupButtons>
        </>
    );
};

export default ItemForm;
