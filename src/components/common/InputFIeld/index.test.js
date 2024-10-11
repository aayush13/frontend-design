import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputField from './index';

describe('InputField Component', () => {
  
  it('renders the input element with correct type', () => {
    render(<InputField type="text" />);
    
    const inputElement = screen.getByRole('textbox'); 
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('allows user to type into the input field', () => {
    render(<InputField type="text" />);
    
    const inputElement = screen.getByRole('textbox');
    userEvent.type(inputElement, 'Hello, World!');
    
    expect(inputElement).toHaveValue('Hello, World!');
  });

  it('renders input with additional props like placeholder', () => {
    render(<InputField type="text" placeholder="Enter your name" />);
    
    const inputElement = screen.getByPlaceholderText('Enter your name');
    expect(inputElement).toBeInTheDocument();
  });
  
  it('renders input with number type and allows number input', () => {
    render(<InputField type="number" />);
    
    const inputElement = screen.getByRole('spinbutton'); 
    userEvent.type(inputElement, '12345');
    
    expect(inputElement).toHaveValue(12345);
  });
});
