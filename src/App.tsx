import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/header";
import ListItems from "./components/list-items";
import { theme } from "./config/theme";
import { Container, GlobalStyles } from "./styles/global";

const App = () => {
    return (
        <ThemeProvider theme={theme.light}>
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
