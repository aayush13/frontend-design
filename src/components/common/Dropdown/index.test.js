import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from './index';

const mockProps = {
  name: 'test-dropdown',
  placeholder: 'Select an option',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
  isClearable: true,
  isSearchable: true,
};

describe('Dropdown Component', () => {
  it('renders the dropdown with correct placeholder', () => {
    render(<Dropdown {...mockProps} />);
    const placeholder = screen.getByText('Select an option');
    expect(placeholder).toBeInTheDocument(); 
  });


  it('disables searchable functionality when isSearchable is false', async() => {
    render(<Dropdown {...mockProps} isSearchable={false} />);
    const searchInput = screen.getByRole('combobox');
    await userEvent.type(searchInput, 'Option 1');
    expect(await screen.findByText('Option 1')).toBeInTheDocument();  
  });
});
