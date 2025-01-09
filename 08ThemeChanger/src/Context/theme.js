import React, { useContext } from "react";
import { createContext } from "react";

// default value are passing beacuse we need some initials values
export const ThemeContext = React.createContext({
    themeMode: "light",
    darkTheme: () => {},
    lighTheme: () => {},
});


export const ThemeProvider = ThemeContext.Provider;

// creating an custom hook so we don't need to export useCOntext and ThemeContext
export default function useTheme(){
    return useContext(ThemeContext)
}
