import React from "react"
import { ThemeProvider, createTheme } from "@mui/material"
import { CssBaseline } from "@mui/material"

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default Theme
