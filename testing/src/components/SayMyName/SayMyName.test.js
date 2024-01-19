import { render, screen } from '@testing-library/react';
import SayMyName from './SayMyName';

describe('[TEST] - Componente SayMyName', () => {

    test('Existe login en el componente', () => {
        render(<SayMyName />);
        const login = screen.getAllByText(/login/i)
        expect(login.length).toBe(1);
    });
    test("", () => {

    });
});