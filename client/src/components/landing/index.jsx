/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Layout from "../layout";
import ReactGA from "react-ga";
import {fonts, respond, Headline1} from '../../styles'

export default function () {
    ReactGA.pageview("/");

    return (
        <Layout>
            <Headline1>IT Context Example Compositions</Headline1>
            <Menu>
                <ul>
                    <h3>Minimalisme</h3>
                    <p>Websites ontworpen door het creëren van een tegenstelling tussen de omgeving en onderwerp, die geexponeerd is. 
                        Heel vaak heeft dat gevolgen in schon ontwerp, met weinig emoties en  </p>
                    <Link to='/template-3'>Template-3</Link>
                </ul>
                <ul>
                    <h3>Classic</h3>
                    <p>Websites ontworpen door het creëren van een tegenstelling tussen de omgeving en onderwerp, die geexponeerd is. 
                        Heel vaak heeft dat gevolgen in schon ontwerp, met weinig emoties en  </p>
                    <Link to='/template-1'>Template-1</Link>
                </ul>
            </Menu>
        </Layout>
    );
}

const Menu = styled.section`
    margin: 5rem auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    ${()=>respond('l','grid-template-columns: 1fr 1fr 1fr;')}
    

    ul{
        list-style: none;
        display:flex;
        flex-direction: column;

        h3{
            font-family: ${fonts.heading1};
            font-size: 2.3rem;
            font-weight: 400;
            color: ${p=>p.theme.primary2};
        }
        a{
            font-size: 2rem;
            margin: 1rem 0;
            text-decoration: none;
            color: ${p=>p.theme.secondary};
        }
    }
`
