import React from "react"
import { ThemeProvider, createTheme } from "@mui/material"
import { CssBaseline } from "@mui/material"

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default Theme
