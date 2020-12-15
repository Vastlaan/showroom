import React from "react";
import styled from "styled-components";
import { respond } from "../../styles";

export default function Layout({ children }) {
    return <Container>{children}</Container>;
}

const Container = styled.main`
    position: relative;
    padding-top: 5rem; // place for navbar if navbar has different height, this value should also adjust
    width: 100%;
    background-color: ${(p) => p.theme.grey8};
    ${() => respond("xl", "width: 1255px; margin: 0 auto;padding: 2.7rem 0;")}
    ${() => respond("tv", "width: 2560px; margin: 0 auto;")}
`;
