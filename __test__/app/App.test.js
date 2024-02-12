import { act, fireEvent, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '@/components/App';
import { renderWithProviders } from '@/utils/test-utils';
import { setDirection } from '@/features/direction/directionSlice';

describe("default settings", () => {
  test("loads and displays initially", async () => {
    // ARRANGE
    renderWithProviders(<App />);
  
    // ACT
    const zeroes = await screen.findAllByText(/0/i);
    
    // ASSERT
    expect(zeroes).toHaveLength(4);
  });
});

describe("start game", () => { 
  test("start game after chosing direction", async () => {
    // ARRANGE
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () =>
        Promise.resolve([
          {
            id: "452518bf-dc8a-4563-9d0a-932495c930cc",
            englishVocabulary: "to perceive",
            germanVocabularies: ["wahrnehmen", "bemerken", "erkennen"],
            step: 0,
          },
        ]),
    });
    const { store } = renderWithProviders(<App />);
    const button = await screen.findByRole("button", {
      name: /start/i,
    });
    const base = screen.getByText(/base/i).nextSibling;

    // ACT
    act(() => store.dispatch(setDirection("englishToGerman")));
    await user.click(button);
    // ASSERT
    expect(base.textContent).toEqual("1");
  });
});



