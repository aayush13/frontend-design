import { render, screen } from '@testing-library/react';
import Separator from './index';

describe('Separator Component', () => {
  it('renders the separator with an hr element', () => {
    render(<Separator />);
    const hrElement = screen.getByRole('separator');
    expect(hrElement).toBeInTheDocument();
  });

});
