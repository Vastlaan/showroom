import React from "react";
import styled from "styled-components";
import { respond } from "../../styles";
import Menu from "../sideMenu1";

export default function Layout({ children }) {
    return (
        <Container>
            <Menu />
            {children}
        </Container>
    );
}

const Container = styled.main`
    position: relative;
    padding-top: 5rem; // place for navbar if navbar has different height, this value should also adjust
    width: 100%;
    min-height: 100vh;
    background-color: ${(p) => p.theme.grey8};
    ${() => respond("xl", "width: 1366px; margin: 0 auto;")}
`;
