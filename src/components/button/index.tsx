import React from "react";
import { Styles } from "./styles";

interface IProps {
    onClick?(): void;
    type?: "button" | "submit";
    children: React.ReactNode;
}

const Button = ({ type = "button", children, ...rest }: IProps) => {
    return (
        <Styles.Container type={type} {...rest}>
            {children}
        </Styles.Container>
    );
};

export default Button;
