import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../CreateEvent/AutoCompleteSport/node_modules/@testing-library/jest-dom/extend-expect';
import Update from './Update';

describe('<Update />', () => {
  test('it should mount', () => {
    render(<Update />);

    const update = screen.getByTestId('Update');

    expect(update).toBeInTheDocument();
  });
});
