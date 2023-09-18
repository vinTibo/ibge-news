import App from "../App";
import { renderWithRouterAndRedux } from "./helpers/RenderWith";
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { homeMock } from "./mocks/HomeMock";

describe(('Home'), async () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (homeMock),
    });
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  it(('should render Home'), async () => {
    // global.fetch = vi.fn().mockResolvedValue({
    //   json: async () => (homeMock),
    // });
    renderWithRouterAndRedux(<App />);

    const favoriteButtons = await screen.findAllByTestId('FavoriteBorderIcon');
    const knowMoreButtons = await screen.findAllByRole('button', { name: /Saiba mais/i });
    const loadMoreButton = await screen.findByRole('button', { name: /Carregar mais.../i });
    const navBar = await screen.findByRole('navigation');

    expect(favoriteButtons).toHaveLength(10);
    expect(knowMoreButtons).toHaveLength(10);
    expect(loadMoreButton).toBeInTheDocument();
    expect(navBar).toBeInTheDocument();

    await userEvent.click(loadMoreButton);

    const favoriteButtonsNew = await screen.findAllByTestId('FavoriteBorderIcon');
    const knowMoreButtonsNew = await screen.findAllByRole('button', { name: /Saiba mais/i });
    expect(favoriteButtonsNew).toHaveLength(13);
    expect(knowMoreButtonsNew).toHaveLength(13);

    await userEvent.click(favoriteButtonsNew[0]);
    await userEvent.click(favoriteButtonsNew[1]);

    const favoriteButtonsFull = await screen.findAllByTestId('FavoriteIcon');
    const favoriteButtonsEmpty = await screen.findAllByTestId('FavoriteBorderIcon');
    expect(favoriteButtonsEmpty).toHaveLength(11);
    expect(favoriteButtonsFull).toHaveLength(2);

    await userEvent.click(favoriteButtonsFull[1]);

    const favoriteButtonsFullAfterClick = await screen.findAllByTestId('FavoriteIcon');
    expect(favoriteButtonsFullAfterClick).toHaveLength(1);
  });
  it(('should render the full news'), async () => {
    renderWithRouterAndRedux(<App />);

    const knowMoreButtons = await screen.findAllByRole('link');

    await userEvent.click(knowMoreButtons[0]);

    // screen.debug();

    // await waitFor(() => {
    //   expect(knowMoreButtons).not.toBeInTheDocument();
    // }, { timeout: 3000 });
  });
});