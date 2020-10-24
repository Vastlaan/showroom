import React, { Children } from "react";
import { ThemeProvider } from "styled-components";
import { colorsDark, colorsLight } from "../styles";

export default function ({ children }) {
    return <ThemeProvider theme={colorsLight}>{children}</ThemeProvider>;
}
