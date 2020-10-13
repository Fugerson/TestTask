import React from 'react';
import Container from './components/Container';
import FormPopap from './components/Form-popap/Form-popap';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './store/redusers'


const store = createStore(rootReducer)


function App() {


    return ( 
    <Provider store={store}>
        <div id="App">
            <Container/>
        </div>
    </Provider>
    )
}



export default App;