import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
//global
import GlobalStyles from "./global/globalStyles";
import ThemeProvider from "./global/themeProvider";
//components
import Landing from "./components/landing";
import Article1 from "./components/article1";
import Article2 from "./components/article2";
import SideMenu1 from "./components/sideMenu1";
import ButtonMenu from "./components/buttonMenu";
import Example1 from "./components/example1";

function App() {
    // //initialize analytics
    // ReactGA.initialize('')

    const [isMenuDisplayed, setIsMenuDisplayed] = useState(true);

    return (
        <>
            <ThemeProvider>
                <GlobalStyles />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/article-1" component={Article1} />
                        <Route exact path="/article-2" component={Article2} />
                        <Route
                            exact
                            path="/menu-side-1"
                            render={() => (
                                <SideMenu1
                                    isMenuDisplayed={isMenuDisplayed}
                                    setIsMenuDisplayed={setIsMenuDisplayed}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/button-menu"
                            render={() => (
                                <ButtonMenu
                                    isOpen={isMenuDisplayed}
                                    setIsOpen={setIsMenuDisplayed}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/example-1"
                            render={() => (
                                <Example1
                                    isMenuDisplayed={isMenuDisplayed}
                                    setIsMenuDisplayed={setIsMenuDisplayed}
                                />
                            )}
                        />
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
