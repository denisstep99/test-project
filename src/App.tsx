import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './App.css';

import {NotebookScreen} from "./screens/NotebookScreen";
import {getNotesRequestAction} from "./sagas/notes/Actions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {dispatch(getNotesRequestAction());}, [dispatch]);

    return (
            <div className="App">
                <NotebookScreen />
            </div>
    );
}

export default App;
