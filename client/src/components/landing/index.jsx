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
                <Link to='/article-1'>Article 1</Link>
                <Link to='/article-2'>Article 2</Link>
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
    }
`
