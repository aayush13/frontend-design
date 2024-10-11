import { render, screen } from '@testing-library/react';
import Card from './index';

const mockItem = {
  date: '2024-10-10',
  title: 'Sample Title',
  content: 'This is a sample description for the card content.',
  category: 'Sample Category',
  decision: 'Approved',
  company: 'Sample Company',
};

describe('Card Component', () => {
  
  it('renders the card with correct data', () => {
    render(<Card item={mockItem} />);

    expect(screen.getByText('2024-10-10')).toBeInTheDocument();
    expect(screen.getByText('Sample Title')).toBeInTheDocument();
    expect(screen.getByText('This is a sample description for the card content.')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Sample Category')).toBeInTheDocument();
    expect(screen.getByText('Decision')).toBeInTheDocument();
    expect(screen.getByText('Approved')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Sample Company')).toBeInTheDocument();
  });

  it('renders an empty card when no item prop is provided', () => {
    render(<Card item={{}} />);

    expect(screen.queryByText('Category')).toBeInTheDocument();
    expect(screen.queryByText('Decision')).toBeInTheDocument();
    expect(screen.queryByText('Company')).toBeInTheDocument();
    
    expect(screen.queryByText(mockItem.date)).not.toBeInTheDocument();
    expect(screen.queryByText(mockItem.title)).not.toBeInTheDocument();
    expect(screen.queryByText(mockItem.content)).not.toBeInTheDocument();
  });

  it('renders partial data if some properties are missing', () => {
    const partialItem = {
      date: '2024-10-10',
      title: 'Sample Title',
      company: 'Sample Company',
    };
    
    render(<Card item={partialItem} />);

    expect(screen.getByText('2024-10-10')).toBeInTheDocument();
    expect(screen.getByText('Sample Title')).toBeInTheDocument();
    expect(screen.getByText('Sample Company')).toBeInTheDocument();

    expect(screen.queryByText('Category')).toBeInTheDocument();
    expect(screen.queryByText('Decision')).toBeInTheDocument();
    expect(screen.queryByText('Approved')).not.toBeInTheDocument();
    expect(screen.queryByText('Sample Category')).not.toBeInTheDocument();
  });
});
