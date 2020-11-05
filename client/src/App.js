import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
//global
import GlobalStyles from "./global/globalStyles";
import ThemeProvider from "./global/themeProvider";
import StateProvider from "./global/stateProvider";
//components
import Landing from "./components/landing";
import Article1 from "./components/article1";
import Article2 from "./components/article2";
import SideMenu1 from "./components/sideMenu1";
import ButtonMenu from "./components/buttonMenu";
import Buttons from "./components/buttons";
import Example1 from "./components/example1";
import Example2 from "./components/example2";
import Nav1 from "./components/navigation1";
import Nav2 from "./components/navigation2";
import Header1 from "./components/header1";
import Header2 from "./components/header2";
import Header3 from "./components/header3";
import Overlapping1 from "./components/overlapping1";
import Intersection1 from "./components/intersection1";

function App() {
    // //initialize analytics
    // ReactGA.initialize('')

    return (
        <>
            <StateProvider>
                <ThemeProvider>
                    <GlobalStyles />
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route
                                exact
                                path="/article-1"
                                component={Article1}
                            />
                            <Route
                                exact
                                path="/article-2"
                                component={Article2}
                            />
                            <Route
                                exact
                                path="/menu-side-1"
                                render={() => <SideMenu1 />}
                            />
                            <Route
                                exact
                                path="/button-menu"
                                render={() => <ButtonMenu />}
                            />
                            <Route
                                exact
                                path="/buttons"
                                render={() => <Buttons />}
                            />
                            <Route
                                exact
                                path="/example-1"
                                render={() => <Example1 />}
                            />
                            <Route
                                exact
                                path="/example-2"
                                render={() => <Example2 />}
                            />
                            <Route
                                exact
                                path="/nav-1"
                                render={() => <Nav1 />}
                            />
                            <Route
                                exact
                                path="/nav-2"
                                render={() => <Nav2 />}
                            />
                            <Route
                                exact
                                path="/header-1"
                                render={() => <Header1 />}
                            />
                            <Route
                                exact
                                path="/header-2"
                                render={() => <Header2 />}
                            />
                            <Route
                                exact
                                path="/header-3"
                                render={() => <Header3 />}
                            />
                            <Route
                                exact
                                path="/overlapping-1"
                                render={() => <Overlapping1 />}
                            />
                            <Route
                                exact
                                path="/intersection-1"
                                render={() => <Intersection1 />}
                            />
                        </Switch>
                    </Router>
                </ThemeProvider>
            </StateProvider>
        </>
    );
}

export default App;
