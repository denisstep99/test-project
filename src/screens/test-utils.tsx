import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Todo переписать чтобы был универсальным
import notesReducer from "../store/notes/Slice";
import {sagaMiddleware} from "../store";

function render(
    ui: React.ReactElement,
    {
        preloadedState,
        store = configureStore({ reducer: { notes: notesReducer }, preloadedState, middleware: [sagaMiddleware] }),
        ...renderOptions
    }:any = {}
) {
    function Wrapper({ children }: {children: React.ReactElement | Array<React.ReactElement>}) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }