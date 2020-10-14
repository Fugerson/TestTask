import React from 'react';
import Container from './components/Container';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './store/redusers'


const store = createStore(rootReducer)


function App() {
    console.log(store.getState().form)

    return ( 
    <Provider store={store}>
        <div id="App">
            <Container/>
        </div>
    </Provider>
    )
}



export default App;