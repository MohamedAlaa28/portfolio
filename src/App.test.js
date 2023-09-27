import { render } from "@testing-library/react";
import App from "./App";

test("renders without errors", () => {
  // Attempt to render the App component
  const { container } = render(<App />);

  // If no error is thrown during rendering, the test will pass
  expect(container).toBeDefined();
});




