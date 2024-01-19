import { render, screen } from '@testing-library/react';
import App from './App';


describe('[App] - Grupo de test del componente APP', () => {
    test('Buscar "learreact" en los atributos alt del component', () => {
        render(<App />);
        const link = screen.getAllByAltText(/pepito perez/i)
        expect(link.length).toBe(1);
    });

    test('Prueba titulo home', () => {
        const title = "react"
        render(<App />);
        screen.getByRole('heading', { name: title })
    });
});