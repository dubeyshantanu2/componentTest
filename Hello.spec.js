import { render, screen } from '@testing-library/react-native';
import React from 'react';

import Hello from './Hello';

describe('Hello', () => {
  it('renders the correct message', () => {
    render(<Hello />);
    expect(screen.getByText('Hello, world!')).toBeVisible();
  });
});
