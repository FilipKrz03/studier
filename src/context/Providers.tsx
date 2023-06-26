
import React from "react";
import { AuthContextProvider } from "./AuthContext";
import ThemeContextProvider from "./ThemeContext";

type Props = {
    children : React.ReactNode
}

const Providers = ({children}:Props) => {
    return(
        <>
        <AuthContextProvider>
            <ThemeContextProvider>
                {children}
            </ThemeContextProvider>
        </AuthContextProvider>
        </>
    )
}

export default Providers;