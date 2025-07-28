import { render, screen } from '@testing-library/react';
import Async from './Async.js';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    //Override component's fetch functionality and fetch some dummy data
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }]
    });

    //Arrange
    render(<Async />);

    //Act

    //Assert
    const listItemElements = await screen.findAllByRole('listitem',
      // { exact: true }, { timeout: 2 }
    );
    expect(listItemElements).not.toHaveLength(0);
  });
});