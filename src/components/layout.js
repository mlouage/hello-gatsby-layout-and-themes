import React from "react"
import { Link } from "gatsby"
import { Box } from "@mui/material"

const Layout = ({ children }) => {
  return (
    <Box>
      <Link to="/">Index</Link> | <Link to="/about">About</Link>
      <main>{children}</main>
    </Box>
  )
}

export default Layout
