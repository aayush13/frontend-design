import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './index';

describe('SearchBar Component', () => {
  
  it('renders the search input field with correct attributes', () => {
    render(<SearchBar />);

    
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'search');
  });

 
  it('allows the user to type into the search field', () => {
    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText('Search');
    
    
    fireEvent.change(searchInput, { target: { value: 'test search' } });
    
    
    expect(searchInput.value).toBe('test search');
  });

 
  it('allows clearing the input field value', () => {
    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText('Search');
    
    
    fireEvent.change(searchInput, { target: { value: 'test search' } });
    expect(searchInput.value).toBe('test search');

   
    fireEvent.change(searchInput, { target: { value: '' } });
    expect(searchInput.value).toBe('');
  });
});
