
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberAddition from './numberAddition';

test('renders learn react link', () => {
    render(<NumberAddition />);
    screen.debug();
    const number1 = screen.getByPlaceholderText('Enter number 1');
    const number2 = screen.getByPlaceholderText('Enter number 2');
    const addButton = screen.getByText('Add');
    fireEvent.change(number1, { target: { value: '10' } });
    fireEvent.change(number2, { target: { value: '20' } });
    fireEvent.click(addButton);
    const sum = screen.getByText('Sum: 30');
    expect(sum).toBeInTheDocument();
});

// write test case for fibonacci function with value 5 access elememnt with id = fib  and expect output to be 5
test('fibonacci function', () => {
    render(<NumberAddition />);
    const fib = screen.getByTestId('fib');
    screen.debug(null,20000);
    expect(fib).toHaveValue('5');
    // test case is failing because the fibonacci function is not returning the correct value

});
