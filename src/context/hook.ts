import { useContext } from "react";
import { AppContext } from ".";

export const useAppContext = () => {
    const context = useContext(AppContext);

    return context;
};
