import React from 'react';
import {Provider} from 'react-redux';
import './App.css';

import {Note} from "./components/Note/Note";
import {rootStore} from "./store";

function App() {
    return (
        <Provider store={rootStore}>
            <div className="App">
                <Note description={'sdsd'} index={2} title={'dsd'}/>
            </div>
        </Provider>
    );
}

export default App;
