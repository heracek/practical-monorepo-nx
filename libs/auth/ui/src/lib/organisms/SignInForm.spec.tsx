import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SignInForm } from './SignInForm';

describe('SignInForm', () => {
  it('calls `handleSubmit` on success', async () => {
    const handleSubmit = jest.fn();
    render(<SignInForm onSubmit={handleSubmit} />);

    userEvent.type(screen.getByLabelText(/email/i), 'john@doe.com');
    userEvent.type(screen.getByLabelText(/password/i), 'secret123');
    userEvent.click(
      screen.getByRole('button', {
        text: /sing in/i,
      }),
    );

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith(
        {
          email: 'john@doe.com',
          password: 'secret123',
        },
        expect.anything(),
      );
    });
  });
});
