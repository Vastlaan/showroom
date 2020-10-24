import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
//global
import GlobalStyles from "./global/globalStyles";
import ThemeProvider from "./global/themeProvider";
//components
import Landing from "./components/landing";

function App() {
    // //initialize analytics
    // ReactGA.initialize('')

    return (
        <>
            <ThemeProvider>
                <GlobalStyles />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
