import { render, screen } from '@testing-library/react-native';
import React from 'react';

import Hello from './Hello';

describe('Hello', () => {
  it('display the passed in name', () => {
    render(<Hello name="Shantanu" />);
    expect(screen.getByText('Hello, Shantanu!')).toBeVisible();
  });
});
