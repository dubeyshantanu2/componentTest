import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';

// import Hello from './Hello';

import NewMessageForm from './NewMessageForm';
// describe('Hello', () => {
//   it('display the passed in name', () => {
//     render(<Hello name="Shantanu" />);
//     expect(screen.getByText('Hello, Shantanu!')).toBeVisible();
//   });
//   it('displays the squirrel image', () => {
//     expect(screen.getByLabelText('fav waving')).toBeVisible();
//   });
// });

describe('NewMessageForm', () => {
  describe('clicking send', () => {
    it('clear the message field', () => {
      render(<NewMessageForm />);
      fireEvent.changeText(screen.getByPlaceholderText('Message'), 'Hello world');
      fireEvent.press(screen.getByText('Send'));
    });
  });
});
