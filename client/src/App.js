import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import GlobalStyles from "./global/globalStyles";
import ThemeProvider from "./global/themeProvider";
import StateProvider from "./global/stateProvider";
import Landing from "./components/landing";
import Example3 from "./components/example3";

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
                                render={() => <Example3 />}
                            />
                        </Switch>
                    </Router>
                </ThemeProvider>
            </StateProvider>
        </>
    );
}

export default App;
