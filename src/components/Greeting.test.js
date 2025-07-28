import { render, screen } from '@testing-library/react';
import Greeting from "./Greeting.js";

test('renders Hello World as a text', () => {
  //Arrange
  render(<Greeting />);

  //Act

  //Assert
  // const helloWorldElement = screen.getByText(/Hello World/i);
  // const helloWorldElement = screen.getByText('Hello World');
  const helloWorldElement = screen.getByText('Hello World', { exact: false });
  expect(helloWorldElement).toBeInTheDocument();
});