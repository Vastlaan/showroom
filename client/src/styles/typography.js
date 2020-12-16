import styled from "styled-components";
import { fonts } from "./fonts";
import { respond } from "./respond";

export const Para1 = styled.p`
    margin: 2.7rem auto 4.7rem auto;
    font-family: ${fonts.heading3};
    font-size: 1.9rem;
    line-height: 1.6;
    color: ${(p) => p.theme.grey4};
    padding-left: 2rem;
    position: relative;
    max-width: 55rem;
    text-align: center;

    ${() => respond("l", "text-align: left;margin: 2.7rem 0 4.7rem 0;")}

    &::after {
        display: block;
        content: "";
        transform: translate(-50%, 0);
        position: absolute;
        top: -10px;
        left: 50%;
        width: 20rem;
        height: 3px;
        margin: 0 auto;
        background-color: ${(p) => p.theme.secondary3};
        ${() =>
            respond(
                "l",
                "top:0; left:0;width:1rem; height: 100%;margin: 0 ;transform: translate(0,0);"
            )}
    }
`;

export const Para2 = styled.p`
    margin: 2.7rem 0;
    font-family: ${fonts.heading3};
    font-size: 1.9rem;
    line-height: 1.6;
    color: ${(p) => (p.color ? p.color : p.theme.grey4)};
    max-width: 45rem;
    text-align: center;

    ${() => respond("l", "text-align: left;")}
`;

export const Headline1 = styled.h1`
    font-family: ${fonts.poppins};
    font-size: 4.8rem;
    font-weight: 800;
    color: ${(p) => p.theme.primary3};
    line-height: 1;
    text-align: center;

    ${() =>
        respond("l", "font-size: 5.7rem; line-height: 1.2;text-align: left;")}

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
    max-width: 40rem;
    text-align: center;
    margin: 0 auto;

    ${() =>
        respond("l", "font-size: 5.7rem;text-align: left;max-width: 45rem;")}

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

export const HeadlineB1 = styled.h1`
    font-size: 4.5rem;
    font-family: ${fonts.heading1};
    color: ${(p) => (p.color ? p.color : "white")};
    font-weight: 300;
    text-align: ${(p) => (p.align ? p.align : "left")};
`;
export const ParaB1 = styled.p`
    font-size: 1.7rem;
    font-family: ${fonts.heading1};
    color: ${(p) => (p.color ? p.color : "white")};
    font-weight: 300;
    text-align: ${(p) => (p.align ? p.align : "left")};
    max-width: 45rem;
`;
