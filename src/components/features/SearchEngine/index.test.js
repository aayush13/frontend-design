import { render, screen, fireEvent } from '@testing-library/react';
import SearchEngine from './index'; 

describe('SearchEngine Component', () => {

  test('renders the UserBar component', () => {
    render(<SearchEngine />);
    const userBarElement = screen.getByText(/name surname/i); 
    expect(userBarElement).toBeInTheDocument();
  });

  test('renders the search input', () => {
    render(<SearchEngine />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('renders the search button', () => {
    render(<SearchEngine />);
    const searchButton = screen.getByRole('button', { name: /search/i });
    expect(searchButton).toBeInTheDocument();
  });

  test('renders the Clear Filters button', () => {
    render(<SearchEngine />);
    const clearButton = screen.getByRole('button', { name: /clear filters/i });
    expect(clearButton).toBeInTheDocument();
  });

  test('renders the date picker', () => {
    render(<SearchEngine />);
    const datePicker = screen.getByPlaceholderText(/date/i);
    expect(datePicker).toBeInTheDocument();
  });

  test('renders result title and counter', () => {
    render(<SearchEngine />);
    const resultTitle = screen.getByText(/results/i);
    const resultCounter = screen.getByText(/showing/i);
    expect(resultTitle).toBeInTheDocument();
    expect(resultCounter).toBeInTheDocument();
  });

  test('renders pagination controller', () => {
    render(<SearchEngine />);
    const paginationButtons = screen.getAllByRole('button'); 
    expect(paginationButtons.length).toBeGreaterThan(0); 
  });


});
