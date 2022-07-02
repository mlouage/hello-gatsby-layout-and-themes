import "@fontsource/roboto";
import "@fontsource/material-icons";

import React from "react";

import Layout from "./src/components/layout";
import Theme from "./src/components/theme";

export function wrapPageElement({element, props}) {
    return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({element}) {
    return <Theme>{element}</Theme>
}
