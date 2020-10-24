import React from "react";
import Layout from "../layout";
import ReactGA from "react-ga";

export default function () {
    ReactGA.pageview("/");

    return (
        <Layout>
            <h1>Your code goes here</h1>
            <h3>What is installed/implement [frontend]</h3>
            <ul>
                <li>proxied to localhost in development</li>
                <li>components folder</li>
                <li>styles folder</li>
                <li>img folder</li>
                <li>styled-components</li>
                <li>react-router-dom</li>
                <li>react-ga</li>
                <li>react-helmet</li>
                <li>react-icons</li>
            </ul>
            <h3>What is installed [backend]</h3>
            <ul>
                <li>concurently</li>
                <li>nodemon [dev]</li>
                <li>express</li>
                <li>sendgrid/mail</li>
            </ul>

            <h1>
                remember that helmet is not implemented as well as styles has to
                be adjust to typeface (change the h1 styling in global styles)
                Change server's port
            </h1>
        </Layout>
    );
}
