import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

it('renders a welcome message when signed out', async () => {
  // eslint-disable-next-line no-unused-vars
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  await screen.findByRole('list', { name: 'book list' });
});