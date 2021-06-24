import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter as Router,} from "react-router-dom";
import './App.css';

import {NotebookScreen} from "./screens/NotebookScreen";
import {getNotesRequestAction} from "./sagas/notes/Actions";
import {MainMenu} from "./common.components/MainMenu/MainMenu";
import {MainMenuItem} from "./common.components/MainMenu/MenuItem/MainMenuItem";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotesRequestAction());
    }, [dispatch]);

    return (
        <div className="App">
            <Router>
                <NotebookScreen/>
            </Router>
        </div>
    );
}

export default App;
