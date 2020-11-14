/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Layout from "../layout";
import ReactGA from "react-ga";
import {fonts, respond} from '../../styles'

export default function () {
    ReactGA.pageview("/");

    return (
        <Layout>
            <Menu>
                <ul>
                    <h3>Ready Compositions</h3>
                    <Link to='/example-1'>Example 1</Link>
                    <Link to='/example-2'>Example 2</Link>
                    <Link to='/example-3'>Example 3</Link>
                </ul>
                <ul>
                    <h3>Headers</h3>
                    <Link to='/header-1'>Header 1</Link>
                    <Link to='/header-2'>Header 2</Link>
                    <Link to='/header-3'>Header 3</Link>
                    <Link to='/header-4'>Header 4</Link>
                </ul>
                <ul>
                    <h3>Articles</h3>
                    <Link to='/article-1'>Article 1</Link>
                    <Link to='/article-2'>Article 2</Link>
                </ul>
                <ul>
                    <h3>Sections</h3>
                    <Link to='/overlapping-1'>Section Overlapping 1</Link>
                    <Link to='/intersection-1'>Intersection 1</Link>
                    <Link to='/intersection-2'>Intersection 2</Link>
                    <Link to='/section-rank'>Section Rank</Link>
                </ul>
                <ul>
                    <h3>Buttons</h3>
                    <Link to='/buttons'>Buttons</Link>
                    <Link to='/button-menu'>Button Menu</Link>
                </ul>
                <ul>
                    <h3>Navigations</h3>
                    <Link to='/nav-1'>Navigation 1</Link>
                    <Link to='/nav-2'>Navigation 2</Link>
                    <Link to='/nav-3'>Navigation 3</Link>
                </ul>
                <ul>
                    <h3>Menus</h3>
                    <Link to='/menu-side-1'>Menu Side 1</Link>
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
