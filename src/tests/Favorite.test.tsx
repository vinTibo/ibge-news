import { vi } from "vitest";
import { homeMock } from "./mocks/HomeMock";
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from "./helpers/RenderWith";
import App from "../App";
import { userEvent } from "@testing-library/user-event";

describe('Favorite', async () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (homeMock),
    });
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('should render Favorite', async () => {
    renderWithRouterAndRedux(<App />);

    const favoriteButtons = await screen.findAllByTestId('FavoriteBorderIcon');

    expect(favoriteButtons).toHaveLength(10);

    await userEvent.click(favoriteButtons[1]);
    await userEvent.click(favoriteButtons[2]);
    await userEvent.click(favoriteButtons[3]);
    await userEvent.click(favoriteButtons[4]);
    await userEvent.click(favoriteButtons[5]);

    const loadMoreButton = await screen.findByRole('button', { name: /Carregar mais.../i });
    expect(loadMoreButton).toBeInTheDocument();

    await userEvent.click(screen.getByRole('link', { name: /Favoritas/i }));

    const favoriteButtonsFull = await screen.findAllByTestId('FavoriteIcon');
    expect(favoriteButtonsFull).toHaveLength(5);

    const knowMoreButtons = await screen.findAllByRole('button', { name: /Leia a notícia aqui/i });

    expect(knowMoreButtons).toHaveLength(6);
    expect(loadMoreButton).not.toBeInTheDocument();

    await userEvent.click(favoriteButtonsFull[1]);

    const favoriteButtonsFullAfter = await screen.findAllByTestId('FavoriteIcon');
    expect(favoriteButtonsFullAfter).toHaveLength(4);
  });
});