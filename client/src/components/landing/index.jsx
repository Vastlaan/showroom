/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Layout from "../layout";
import ReactGA from "react-ga";

export default function () {
    ReactGA.pageview("/");

    return (
        <Layout>
            <Menu>
                <Link to='/example-1'>Example 1</Link>
                <Link to='/article-1'>Article 1</Link>
                <Link to='/article-2'>Article 2</Link>
                <Link to='/menu-side-1'>Menu Side 1</Link>
                <Link to='/buttons'>Buttons</Link>
                <Link to='/button-menu'>Button Menu</Link>
                <Link to='/nav-1'>Navigation 1</Link>
                <Link to='/header-1'>Header 1</Link>
                <Link to='/header-2'>Header 2</Link>
                <Link to='/overlapping-1'>Section Overlapping 1</Link>
            </Menu>
            
        </Layout>
    );
}

const Menu = styled.section`
    margin: 5rem auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    a{
        font-size: 2rem;
        margin: 1rem;
    }
`
