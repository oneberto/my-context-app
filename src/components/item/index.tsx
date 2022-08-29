import React, { useState } from "react";
import { useAppContext } from "../../context/hook";
import { IItem } from "../../interfaces/IItem";
import Button from "../button";
import { PencilIcon } from "../icons/pencil";
import { TrashIcon } from "../icons/trash";
import ItemForm from "./form";
import { Styles } from "./styles";

interface IProps extends IItem {
    position: number;
}

const Item = ({
    position,
    nickname,
    whatsapp,
    age,
    id,
    isEditing = false,
}: IProps) => {
    const { deleteItem, toggleIsEditing } = useAppContext();

    return (
        <Styles.Container>
            <strong>{position}</strong>

            {isEditing ? (
                <ItemForm
                    {...{
                        nickname,
                        whatsapp,
                        age,
                        id,
                        isEditing,
                    }}
                />
            ) : (
                <>
                    <p>{nickname ?? <i>Insert name</i>}</p>
                    <p>{age ?? <i>Insert age</i>}</p>
                    <p>{whatsapp ?? <i>Insert phone</i>}</p>

                    <Styles.GroupButtons>
                        <Button onClick={() => toggleIsEditing(id)}>
                            <PencilIcon />
                        </Button>
                        <Button onClick={() => deleteItem(id)}>
                            <TrashIcon />
                        </Button>
                    </Styles.GroupButtons>
                </>
            )}
        </Styles.Container>
    );
};

export default Item;
