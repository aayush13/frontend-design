import { render, screen } from '@testing-library/react';
import Footer from './index';
import Separator from '../../common/Separator';


jest.mock('../../common/Separator', () => () => <div data-testid="separator" />);

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByTestId("tagline")).toHaveTextContent("Justice for all.");
  });

  it('renders company details with correct information', () => {
    render(<Footer />);
    
    expect(screen.getByText("hello@courtcorrect.com")).toBeInTheDocument();
    expect(screen.getByText("33 Percy St, London, W1T 2DF")).toBeInTheDocument();
    expect(screen.getByText("020 7867 3925")).toBeInTheDocument();
  });

  it('renders quick links', () => {
    render(<Footer />);
    
    const quickLinks = [
      'Home',
      'Data',
      'Cases',
      'Customers',
      'Search Data',
      'Custom Fields',
      'Support',
    ];

    quickLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('renders legal links', () => {
    render(<Footer />);
    const legalLinks = [
      'Terms & Conditons',
      'Privacy Policy',
      'AI Safety Policy',
      'Cookie Policy',
      'Compliance Statement',
    ];

    legalLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  
  it('renders copyright details', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2023 CourtCorrect LTD/i)).toBeInTheDocument();
  });

  it('renders the Separator component', () => {
    render(<Footer />);
    const separatorElement = screen.getByTestId('separator');
    expect(separatorElement).toBeInTheDocument();
  });
});
