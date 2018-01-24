import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import FloatingLabelTextExample from "../FloatingLabelTextExample";


const Routes = (props) => (
    <Router history={browserHistory}>
        <Route path='/'>
            <IndexRoute component={FloatingLabelTextExample} />
        </Route>
    </Router>
)

export default Routes;