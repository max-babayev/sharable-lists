import React from 'react';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import CategoryListContainer from './categoryList/CategoryContainer';
import ItemListContainer from './itemList/ItemListContainer';

import configureStore from './store';

import io from 'socket.io-client';
let socket = io(`http://localhost:3000`);

// preloaded state needs to restore user session from localstorage/server in the
// future
const store = configureStore();

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={CategoryListContainer}/>
                    <Route path='/settings' component={ItemListContainer}/>
                    <Route path='/categories/:id' component={ItemListContainer}/>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.querySelector("container"));
