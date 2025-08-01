import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting.js";

describe('Greeting component', () => {
  test('renders "Hello World" as a text', () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    // const helloWorldElement = screen.getByText(/Hello World/i);
    // const helloWorldElement = screen.getByText('Hello World');
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });

  test('does NOT render "good to see you" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText('good to see you', { exact: false });
    expect(outputElement).toBeNull();
  });
});