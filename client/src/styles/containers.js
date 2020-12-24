import styled from "styled-components";
import { respond } from "./respond";

export const Section = styled.section`
    position: relative;
    padding: 9rem 0;
    ${() => respond("l", "padding: 9rem 0;")}
`;
export const SectionNarrow = styled.section`
    max-width: 1255px;
    margin: 0 auto;
    padding: 9rem 1.4rem;
    ${() => respond("l", "padding: 9rem 0;")}
`;
export const Content = styled.div`
    max-width: 1255px;
    margin: 0 auto;
`;
export const ContentWidth = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;
export const Line = styled.div`
    width: 20rem;
    height: 2px;
    background-color: white;
`;
export const BackgroundTransition = styled.div`
    height: ${(p) => (p.height ? p.height : "10rem")};
    background-image: linear-gradient(
        to bottom,
        ${(p) => (p.color1 ? p.color1 : "#DCE0E1")},
        ${(p) => (p.color2 ? p.color2 : "#fefefe")}
    );
`;
