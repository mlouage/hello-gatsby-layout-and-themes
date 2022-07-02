import React from "react"
import { Container } from "@mui/material"

import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav />
      <main>{children}</main>
    </Container>
  )
}

export default Layout
