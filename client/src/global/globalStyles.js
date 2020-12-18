/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { createGlobalStyle } from "styled-components";
import { respond } from "../styles";

export default function () {
    return <GlobalStyles />;
}

const GlobalStyles = createGlobalStyle`
  *,
    *::after,
    *::before{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        line-height: 1.3;
        scrollbar-width: thin;
        scrollbar{width: 4px};
        ${() => respond("m", "line-height: 1.6;")};

    }

    html{
        font-size: 40%;
        box-sizing: border-box;
        ${(props) => respond("xs", `font-size:30%;`)}
        ${(props) => respond("s", `font-size:50%;`)}
        ${(props) => respond("m", `font-size:55%;`)}
        ${(props) => respond("l", `font-size:60%;`)}
        ${(props) => respond("xl", `font-size:62.5%;`)}
        ${(props) => respond("xxl", `font-size:65%;`)}
        ${(props) => respond("tv", `font-size:100%;`)}
    }

    body{
        overflow-x: hidden;
    }

    a{
        text-decoration: none;
    }


    @keyframes showUp{
        0%{
            opacity: 0;
            visibility: hidden;
            transform: scale(0);
        }
        100%{
            opacity: 1;
            visibility: visible;
            transform: scale(1);
        }
    }
    @keyframes showUpPlain{
        0%{
            opacity: 0;
            visibility: hidden;
            
        }
        100%{
            opacity: 1;
            visibility: visible;
            
        }
    }
     @keyframes showUpRight{
        0%{
            opacity: 0;
            visibility: hidden;
            transform: translateX(10rem);
        }
        100%{
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
        }
    }
    @keyframes showUpLeft{
        0%{
            opacity: 0;
            visibility: hidden;
            transform: translateX(-10rem);
        }
        100%{
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
        }
    }
    @keyframes showUpBottom{
        0%{
            opacity: 0;
            visibility: hidden;
            transform: translateY(10rem);
        }
        100%{
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
    }
`;
