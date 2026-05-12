// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RedisCache title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RedisCache/i);
    expect(titleElement).toBeInTheDocument();
});
