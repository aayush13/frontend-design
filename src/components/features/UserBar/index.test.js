import { render, screen } from '@testing-library/react';
import UserBar from './index';
import Avatar from 'react-avatar';

jest.mock('react-avatar', () => jest.fn(() => <div data-testid="avatar" />));

describe('UserBar Component', () => {
 
  it('renders the UserBar with Avatar and username', () => {
    render(<UserBar />);

    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement).toBeInTheDocument();

    const usernameElement = screen.getByTestId('username');
    expect(usernameElement).toBeInTheDocument();
    expect(usernameElement).toHaveTextContent("Name Surname")
  });

  it('passes the correct props to the Avatar component', () => {
    render(<UserBar />);
    expect(Avatar).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Name Surname',
        round: true,
        color: '#9EC59B',
        size: '48',
      }),
      {}
    );
  });
});
