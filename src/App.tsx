import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/header";
import ListItems from "./components/list-items";
import { theme } from "./config/theme";
import { useAppContext } from "./context/hook";
import { Container, GlobalStyles } from "./styles/global";

const App = () => {
    const { state } = useAppContext();

    console.log({ state });

    const currentTheme = (theme as any)[state.themeName];

    return (
        <ThemeProvider theme={currentTheme}>
            <>
                <GlobalStyles />
                <Header />
                <Container>
                    <ListItems />
                </Container>
            </>
        </ThemeProvider>
    );
};

export default App;
