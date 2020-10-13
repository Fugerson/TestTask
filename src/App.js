import React from 'react';
import Header from './components/header/Header';
import Container from './components/Container';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './store/redusers'

const store = createStore(rootReducer)


function App() {

    // console.log(store.getState())

    // store.dispatch("ITEM_CHANGE_NAME_TEXT")


    // console.log(store)
    return ( 
    <Provider store={store}>
        <div id="App">
            <Header />
            <Container store={store}></Container>
        </div>
    </Provider>
    )
}

export default App;