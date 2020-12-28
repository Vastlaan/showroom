/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Layout from "../layout";
import ReactGA from "react-ga";
import {fonts, respond, Headline3} from '../../styles'

export default function () {
    ReactGA.pageview("/");

    return (
        <Background>
            <Layout>
                <Headline3>IT Context Example Compositions</Headline3>
                <Menu>
                    <ul>
                        <h3>Modern</h3>
                        <p>Modern en post modern ontwerpen</p> 
                        <a href='https://preview.colorlib.com/theme/unapp/'>T1 - Bedrijf</a> 
                        
                        <a href='http://eleganto-pro.themes4wp.com/business/'>T3</a>
                        <Link to='/template-4'>T4 Design</Link>
                        <a href='https://preview.colorlib.com/theme/digilab/'>T5</a>
                        <a href='https://preview.colorlib.com/theme/balay/'>T6</a>
                        <a href='https://www.jumpx-react.envytheme.com/index-2/'>T7 - Technologie</a>
                        <a href='https://tuam-react.envytheme.com/'>T8 - Bedrijf</a>
                        
                        
                        
                    </ul>
                    <ul>
                        <h3>Classic</h3>
                        <p>Klassieke websites</p>
                        
                        <Link to='/template-1'>C1</Link>
                        <a href='http://demo.themes4wp.com/connect-pro/'>C2 - Blog</a>  
                    </ul>
                    <ul>
                        <h3>Minimalisme</h3>
                        <p>Websites ontworpen door het creëren van een tegenstelling tussen de omgeving en onderwerp, die geexponeerd is. 
                            Heel vaak heeft dat gevolgen in schon ontwerp, met weinig emoties en  </p>
                        <Link to='/template-2'>Bouwer Minimal</Link>
                        <Link to='/template-3'>M1 Services</Link>
                    </ul> 
                </Menu>
            </Layout>
        </Background>
    );
}

const Background = styled.div`
    background-color: black;
    min-height: 100vh;
`

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
            color: ${p=>p.theme.grey6};
        }
        p{
            font-size: 1.6rem;
            margin: 1rem 0;
            text-decoration: none;
            color: ${p=>p.theme.grey5};
        }
        a{
            font-size: 2rem;
            margin: 1rem 0;
            text-decoration: none;
            color: ${p=>p.theme.grey8};
        }
    }
`
