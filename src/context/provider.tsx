import { ReactNode, useCallback, useReducer } from "react";
import { AppContext, INITIAL_STATE } from ".";
import { AppContextActions } from "../enums/AppContextActions";
import { IItem } from "../interfaces/IItem";
import { appContextReducer } from "./reducer";

interface IProps {
    children: ReactNode;
}

export const AppContextProvider = ({ children }: IProps) => {
    const [state, dispatch] = useReducer(appContextReducer, INITIAL_STATE);

    const toggleTheme = useCallback(() => {
        dispatch({
            type: AppContextActions.ToggleTheme,
        });
    }, [dispatch]);

    const createNewItem = useCallback(() => {
        dispatch({
            type: AppContextActions.CreateNewItem,
        });
    }, []);

    const deleteItem = useCallback((id: string) => {
        dispatch({
            type: AppContextActions.DeleteItem,
            payload: { id },
        });
    }, []);

    const toggleIsEditing = useCallback((id: string) => {
        dispatch({
            type: AppContextActions.ToggleIsEditing,
            payload: { id },
        });
    }, []);

    const editItem = useCallback((payload: IItem) => {
        dispatch({
            type: AppContextActions.EditItem,
            payload,
        });
    }, []);

    return (
        <AppContext.Provider
            value={{
                state,
                toggleTheme,
                createNewItem,
                deleteItem,
                toggleIsEditing,
                editItem,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
