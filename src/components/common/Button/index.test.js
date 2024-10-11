import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

const mockProps = {
  id: 'test-button',
  label: 'Click Me',
  type: 'button',
  onClick: jest.fn(),
  disabled: false,
  active: false,
};

describe('Button Component', () => {
  
  it('renders the button with the correct label', () => {
    render(<Button {...mockProps} />);

    
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'button');
  });

  
  it('calls onClick when the button is clicked', () => {
    render(<Button {...mockProps} />);

    const buttonElement = screen.getByText('Click Me');
    fireEvent.click(buttonElement);

    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when the button is disabled', () => {
    const disabledProps = { ...mockProps, disabled: true };
    render(<Button {...disabledProps} />);

    const buttonElement = screen.getByText('Click Me');
    fireEvent.click(buttonElement);

   
    expect(mockProps.onClick).not.toHaveBeenCalled();
    expect(buttonElement).toBeDisabled();
  });



  
  it('renders with correct id', () => {
    render(<Button {...mockProps} />);

    const buttonElement = screen.getByTestId('test-button');
    expect(buttonElement).toBeInTheDocument();
  });
});
