import React from "react";
import { Styles } from "./styles";

interface IProps {
    name: string;
    label?: string;
    type?: string;
    placeholder?: string;
    onChangeText?(value: string): void;
}

const Input = ({
    type = "text",
    name,
    label,
    placeholder,
    onChangeText,
}: IProps) => {
    return (
        <Styles.Container>
            {!!label && <Styles.Label htmlFor={type}>{label}</Styles.Label>}
            <Styles.Input
                placeholder={placeholder ?? label}
                type={type}
                name={type}
                id={type}
                autoComplete="off"
                {...(!!onChangeText && {
                    onChange: (event) => onChangeText(event?.target?.value),
                })}
            />
        </Styles.Container>
    );
};

export default Input;
