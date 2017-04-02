import React from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import MultiListsContainer from './multiListsView/MultiListsContainer';

import configureStore from './store';

//preloaded state needs to restore user session from localstorage/server in the future
const store = configureStore();

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Route path='/' component={MultiListsContainer}/>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.querySelector("container"));
