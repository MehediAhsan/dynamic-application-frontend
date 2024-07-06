import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);

    useEffect(() => {
        JSON.parse(localStorage.getItem('theme')) === null ?
            setTheme(localStorage.setItem('theme', true)) :
            setTheme(JSON.parse(localStorage.getItem('theme')));
    }, [theme])

    const themeValues = { theme, setTheme }

    return (
        <ThemeContext.Provider value={themeValues}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;