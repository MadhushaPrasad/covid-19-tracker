import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage/Homepage';
import SriLankaPage from '../pages/Sri Lanka/SriLanka';

class AppRoutes extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" component={HomePage}/>
                        <Route path="/srilanka" component={SriLankaPage} exact/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default AppRoutes;
