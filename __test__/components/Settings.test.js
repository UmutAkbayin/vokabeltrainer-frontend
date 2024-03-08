import {screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import {renderWithProviders} from "@/utils/test-utils";
import Settings from "@/components/Settings";

test("renders initially with amount 1", async () => {
  renderWithProviders(<Settings />);

  const input = screen.getByRole("spinbutton");

  expect(input.value).toBe("1");
});

test("renders initially with English To German Direction", async () => {
  renderWithProviders(<Settings />);

  const select = screen.getByRole("combobox", {
    name: /direction/i
  });

  const selectedOption = await screen.getByText(/english to german/i)

  expect(select).toBeInTheDocument();
  expect(selectedOption).toBeInTheDocument();
});

test("can change amount", async () => {
  const user = userEvent.setup();
  const { store } = renderWithProviders(<Settings />);

  const input = screen.getByRole("spinbutton");

  await user.clear(input);
  await user.type(input, "7");

  expect(input.value).toBe("7");
});