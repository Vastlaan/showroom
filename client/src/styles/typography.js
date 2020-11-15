import styled from "styled-components";
import { fonts } from "./fonts";
import { respond } from "./respond";

export const Para1 = styled.p`
    margin: 2.7rem 0 4.7rem 0;
    font-family: ${fonts.heading3};
    font-size: 1.9rem;
    line-height: 1.6;
    color: ${(p) => p.theme.grey4};
    padding-left: 2rem;
    position: relative;
    max-width: 55rem;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 1rem;
        height: 100%;
        background-color: ${(p) => p.theme.secondary3};
    }
`;

export const Para2 = styled.p`
    margin: 2.7rem 0;
    font-family: ${fonts.heading3};
    font-size: 1.9rem;
    line-height: 1.6;
    color: ${(p) => (p.color ? p.color : p.theme.grey4)};
    max-width: 45rem;
`;

export const Headline1 = styled.h1`
    font-family: ${fonts.poppins};
    font-size: 4.8rem;
    font-weight: 800;
    color: ${(p) => p.theme.primary3};
    line-height: 1.2;

    ${() => respond("l", "font-size: 5.7rem;")}

    span {
        color: ${(p) => p.theme.secondary3};
    }
`;

export const Headline2 = styled.h3`
    font-family: ${fonts.poppins};
    font-size: 4.3rem;
    font-weight: 800;
    color: ${(p) => p.theme.primary3};
    line-height: 1;
    max-width: 45rem;

    ${() => respond("l", "font-size: 5.7rem;")}

    strong {
        color: ${(p) => p.theme.secondary3};
    }

    span {
        color: ${(p) => p.theme.secondary3};
        font-size: 2.3rem;
    }
`;

export const Headline3 = styled.h3`
    font-family: ${fonts.poppins};
    font-size: 2.7rem;
    text-transform: uppercase;
    font-weight: 800;
    color: ${(p) => p.theme.secondary3};
    line-height: 1;
    max-width: 45rem;

    ${() => respond("l", "font-size: 2.7rem;")}

    strong {
        color: ${(p) => p.theme.secondary3};
    }

    span {
        color: ${(p) => p.theme.secondary3};
        font-size: 2.3rem;
    }
`;

export const Headline4 = styled.h3`
    font-family: ${fonts.poppins};
    font-size: 2.7rem;
    text-transform: uppercase;
    font-weight: 800;
    color: ${(p) => (p.color ? p.color : "white")};
    line-height: 1;
    max-width: 45rem;

    ${() => respond("l", "font-size: 2.7rem;")}
`;
