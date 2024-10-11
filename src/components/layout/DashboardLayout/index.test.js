import { render, screen } from '@testing-library/react';
import DashboardLayout from './index';

describe('DashboardLayout Component', () => {

  test('renders children inside the DashboardLayout', () => {
    const childText = 'Test Child Content';

    render(
      <DashboardLayout>
        <div>{childText}</div>
      </DashboardLayout>
    );
    const childElement = screen.getByText(childText);
    expect(childElement).toBeInTheDocument();
  });

  
});
