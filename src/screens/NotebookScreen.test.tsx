import React from 'react'
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from './test-utils'
import App from '../App'


describe('Notebook Screen', () => {
    it('fetches & receives a user after clicking the fetch user button', async () => {
        render(<App />)

        // should show no user initially, and not be fetching a user
        expect(screen.getByTestId('notebook-container')).toBeEmptyDOMElement();
        const notePositionInput = screen.getByRole('spinbutton');
        const noteNameInput = screen.getByPlaceholderText("rowNameInputPlaceholder");
        const noteDescriptionInput = screen.getByPlaceholderText("rowDescriptionPlaceholder");
        const submitButton = screen.getByRole('button');

        fireEvent.change(notePositionInput, {target: {value: 3}});
        expect(notePositionInput).toHaveValue(1);

        fireEvent.change(noteNameInput, {target: {value: 'Bread'}});
        fireEvent.change(noteDescriptionInput, {target: {value: 'Buy some bread'}});

        fireEvent.click(submitButton);

        expect(noteNameInput).toHaveValue('');
        expect(noteDescriptionInput).toHaveValue('');
    })
});
