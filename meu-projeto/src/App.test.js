import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const linkElement = screen.getByText((content, element) => {
    return content.includes("learn react");
  });
  expect(linkElement).toBeInTheDocument();
});
