import { render, screen } from '@testing-library/react';
import TitleBox from './index'; 

describe('TitleBox Component', () => {
  
  test('renders the title', () => {
    render(<TitleBox />);
    const titleElement = screen.getByText('AI-Powered Regulatory Search');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the subtitle', () => {
    render(<TitleBox />);
    const subTitleElement = screen.getByText(
      'Use the search engine to search for publications from courts and regulators.'
    );
    expect(subTitleElement).toBeInTheDocument();
  });
  
});
