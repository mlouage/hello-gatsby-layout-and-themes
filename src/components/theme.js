import React, { useState} from "react"
import { ThemeProvider, createTheme, Button } from "@mui/material"
import { CssBaseline } from "@mui/material"

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const [themeName, setThemeName] = useState('dark');
const toggleTheme = () => {
    if (themeName === 'light') {
      setThemeName('dark');
    } else {
      setThemeName('light');
    }
  }

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={themeName === 'light' ? lightTheme : darkTheme}>
            <CssBaseline />
            <Button onClick={toggleTheme}>Toggle theme</Button>
            {children}
        </ThemeProvider>
    )
}

export default Theme
