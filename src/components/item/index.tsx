import React, { useState } from "react";
import Button from "../button";
import { PencilIcon } from "../icons/pencil";
import ItemForm from "./form";
import { Styles } from "./styles";

interface IProps {
    position: number;
}

const Item = ({ position }: IProps) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleClickEdit = () => setIsEditing(true);
    const handleSubmit = () => setIsEditing(false);

    return (
        <Styles.Container>
            <strong>{position}</strong>

            {isEditing ? (
                <ItemForm onSubmit={handleSubmit} />
            ) : (
                <>
                    <p>Nickname</p>
                    <p>22</p>
                    <p>+55 21 91234-5678</p>

                    <Styles.GroupButtons>
                        <Button onClick={handleClickEdit}>
                            <PencilIcon />
                        </Button>
                    </Styles.GroupButtons>
                </>
            )}
        </Styles.Container>
    );
};

export default Item;
