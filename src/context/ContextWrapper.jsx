import SiveNavOpenProvider from "./SiveNavOpenProvider";
import ThemeProvider from "./ThemeProvider";

const ContextWrapper = ({ children }) => {
    return (
        <ThemeProvider>
            <SiveNavOpenProvider>
                {children}
            </SiveNavOpenProvider>
        </ThemeProvider>
    );
};

export default ContextWrapper;