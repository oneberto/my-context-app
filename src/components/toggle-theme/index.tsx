import React from "react";
import { useAppContext } from "../../context/hook";
import { MoonIcon } from "../icons/moon";
import { SunIcon } from "../icons/sun";
import { Styles } from "./styles";

const ToggleTheme = () => {
    const { state, toggleTheme } = useAppContext();

    return (
        <Styles.Container onClick={toggleTheme}>
            <Styles.Bull />
            <Styles.Icon>
                {state.themeName === "light" ? <SunIcon /> : <MoonIcon />}
            </Styles.Icon>
        </Styles.Container>
    );
};

export default ToggleTheme;
