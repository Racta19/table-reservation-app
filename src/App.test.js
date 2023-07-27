import { render, waitFor, screen } from '@testing-library/react';
import axiosMock from 'axios'; // We'll use this to mock axios

import Reservation from './scanerio/Reservation/Reservation';

jest.mock('axios'); // Automatically mocks axios

test('should fetch and display data from API', async () => {
  // Define the mock data to be returned from the API call
  const mockData = [
    {
      reservationName: 'Omer',
      people: '2',
      date: "27/02/2023",
      time: '18:00',
      email: 'asddqw3dds@mail.com'
},
    {
      reservationName: 'test',
      people: '10',
      date: "28/02/2023",
      time: '17:00',
      email: 'asdwdas@mail.com' },
  ];

  // Set up the mock response for the API call
  axiosMock.get.mockResolvedValueOnce({ data: mockData });

  // Render the component
  render(<Reservation />);

  // Wait for the API call to resolve and the component to update
  await waitFor(() => {
    // Assert that the data is rendered on the screen
    const item1 = screen.getByText('reservationName ');
    const item2 = screen.getByText('reservationName ');

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });
});