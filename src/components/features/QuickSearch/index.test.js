import { render, screen } from '@testing-library/react';
import QuickSearch from './index'; 



describe('QuickSearch Component', () => {
  
  test('renders the company logo', () => {
    render(<QuickSearch />);
    const logoElement = screen.getByRole('img', { name: /company logo/i });
    expect(logoElement).toHaveAttribute('src', '/icon.png');
  });

  test('renders the Home menu option', () => {
    render(<QuickSearch />);
    const homeIcon = screen.getByRole('img', { name: /home icon/i });
    expect(homeIcon).toHaveAttribute('src', '/Home.svg');
  });

  test('renders the Suitcase menu option', () => {
    render(<QuickSearch />);
    const suitCaseIcon = screen.getByRole('img', { name: /suitcase icon/i });
    expect(suitCaseIcon).toHaveAttribute('src', '/Suitcase.svg');
  });

  test('renders the Contacts menu option', () => {
    render(<QuickSearch />);
    const contactsIcon = screen.getByRole('img', { name: /contacts icon/i });
    expect(contactsIcon).toHaveAttribute('src', '/contacts.svg');
  });

  test('renders the FileText menu option', () => {
    render(<QuickSearch />);
    const fileTextIcon = screen.getByRole('img', { name: /file text icon/i });
    expect(fileTextIcon).toHaveAttribute('src', '/file-text.svg');
  });

  test('renders the SearchLogo menu option', () => {
    render(<QuickSearch />);
    const searchIcon = screen.getByRole('img', { name: /search icon/i });
    expect(searchIcon).toHaveAttribute('src', '/Search.svg');
  });

  test('renders the Settings menu option', () => {
    render(<QuickSearch />);
    const settingsIcon = screen.getByRole('img', { name: /settings icon/i });
    expect(settingsIcon).toHaveAttribute('src', '/Settings.svg');
  });

  test('renders the Faq menu option', () => {
    render(<QuickSearch />);
    const faqIcon = screen.getByRole('img', { name: /faq icon/i });
    expect(faqIcon).toHaveAttribute('src', '/Frame.svg');
  });
  
});
