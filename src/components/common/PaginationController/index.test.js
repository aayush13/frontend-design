import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PaginationController from './index';

const mockProps = {
  currentPage: 1,
  totalPages: 5,
  handlePageChange: jest.fn(),
};

describe('PaginationController', () => {
  it('renders correct number of page buttons', () => {
    render(<PaginationController {...mockProps} />);
    
    const pageButtons = screen.getAllByRole('button', { name: /^[0-9]+$/ });
    expect(pageButtons).toHaveLength(mockProps.totalPages); 
  });

  it('renders previous and next buttons', () => {
    render(<PaginationController {...mockProps} />);
    
    const previousButton = screen.getByRole('button', { name: '<' });
    const nextButton = screen.getByRole('button', { name: '>' });
    
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('disables previous button on the first page', () => {
    render(<PaginationController {...mockProps} currentPage={1} />);
    
    const previousButton = screen.getByRole('button', { name: '<' });
    expect(previousButton).toBeDisabled();
  });

  it('disables next button on the last page', () => {
    render(<PaginationController {...mockProps} currentPage={5} />);
    
    const nextButton = screen.getByRole('button', { name: '>' });
    expect(nextButton).toBeDisabled();
  });

  it('calls handlePageChange when a page button is clicked', () => {
    render(<PaginationController {...mockProps} />);
    
    const page2Button = screen.getByRole('button', { name: '2' });
    
    userEvent.click(page2Button); 
    expect(mockProps.handlePageChange).toHaveBeenCalledWith(2); 
  });

  it('calls handlePageChange when next button is clicked', () => {
    render(<PaginationController {...mockProps} currentPage={1} />);
    
    const nextButton = screen.getByRole('button', { name: '>' });
    
    userEvent.click(nextButton); 
    expect(mockProps.handlePageChange).toHaveBeenCalledWith(2); 
  });

  it('calls handlePageChange when previous button is clicked', () => {
    render(<PaginationController {...mockProps} currentPage={2} />);
    
    const previousButton = screen.getByRole('button', { name: '<' });
    
    userEvent.click(previousButton); 
    expect(mockProps.handlePageChange).toHaveBeenCalledWith(1); 
  });
});
