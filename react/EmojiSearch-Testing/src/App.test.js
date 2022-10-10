import {render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "./App";


describe('emoji-app tests', () => {
  let header, emojiResults;

  beforeEach(() => {
    render(<App />);
    emojiResults = screen.getAllByTestId('component-emoji')

  })

// test 1 - q1
  test('should render header', () => {
    header = screen.getByText('Emoji Search');
    expect(header).toBeInTheDocument();
  })

// test 2 - q2
  test('should render emoji list', () => {
    expect(emojiResults.length).toEqual(20);
  })

// test 3 - q3
  test('should render emoji list by filter', () => {
    const emoji = "100";
    const input = screen.getByTestId('search-emoji');

    fireEvent.change(input, { target: { value: emoji }});

    expect(screen.getByText(emoji)).toBeInTheDocument();
  })

// test 4 - q4
  test('should check the emoji copied to clipboard', () => {
    expect(emojiResults[0]).toHaveAttribute('data-clipboard-text');
  }) 

})