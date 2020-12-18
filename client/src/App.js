import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import GlobalStyles from "./global/globalStyles";
import ThemeProvider from "./global/themeProvider";
import StateProvider from "./global/stateProvider";
import Landing from "./components/landing";
import Example3 from "./components/example3";
import Example1 from "./components/example1";
import Example2 from "./components/example2";
import Example4 from "./components/example4";

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
                                path="/template-1"
                                render={() => <Example1 />}
                            />
                            <Route
                                exact
                                path="/template-2"
                                render={() => <Example2 />}
                            />
                            <Route
                                exact
                                path="/template-3"
                                render={() => <Example3 />}
                            />
                            <Route
                                exact
                                path="/template-4"
                                render={() => <Example4 />}
                            />
                        </Switch>
                    </Router>
                </ThemeProvider>
            </StateProvider>
        </>
    );
}

export default App;
