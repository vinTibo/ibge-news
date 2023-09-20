import { vi } from "vitest";
import { homeMock } from "./mocks/HomeMock";
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from "./helpers/RenderWith";
import App from "../App";
import { userEvent } from "@testing-library/user-event";

describe('Release', async () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (homeMock),
    });
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('should render Release', async () => {
    renderWithRouterAndRedux(<App />);

    const firstNewsHome = await screen.findByText('Taxa de sindicalização cai a 9,2% em 2022, menor nível da série');

    expect(firstNewsHome).toBeInTheDocument();

    const newsLink = await screen.findByRole('link', { name: /Release/i });

    expect(newsLink).toBeInTheDocument();

    await userEvent.click(newsLink);

    expect(firstNewsHome).not.toBeInTheDocument();
  });
  it('should render the full news', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/Release'] });

    const favoriteButtons = await screen.findAllByTestId('FavoriteBorderIcon');
    const knowMoreButtons = await screen.findAllByRole('button', { name: /Leia a notícia aqui/i });
    const loadMoreButton = await screen.findByRole('button', { name: /Carregar mais.../i });
    const navBar = await screen.findByRole('navigation');

    expect(favoriteButtons).toHaveLength(8);
    expect(knowMoreButtons).toHaveLength(8);
    expect(loadMoreButton).toBeInTheDocument();
    expect(navBar).toBeInTheDocument();

    await userEvent.click(loadMoreButton);

    const favoriteButtonsNew = await screen.findAllByTestId('FavoriteBorderIcon');
    const knowMoreButtonsNew = await screen.findAllByRole('button', { name: /Leia a notícia aqui/i });
    expect(favoriteButtonsNew).toHaveLength(8);
    expect(knowMoreButtonsNew).toHaveLength(8);

    await userEvent.click(favoriteButtonsNew[0]);
    await userEvent.click(favoriteButtonsNew[1]);

    const favoriteButtonsFull = await screen.findAllByTestId('FavoriteIcon');
    const favoriteButtonsEmpty = await screen.findAllByTestId('FavoriteBorderIcon');
    expect(favoriteButtonsEmpty).toHaveLength(6);
    expect(favoriteButtonsFull).toHaveLength(2);

    await userEvent.click(favoriteButtonsFull[1]);

    const favoriteButtonsFullAfterClick = await screen.findAllByTestId('FavoriteIcon');
    expect(favoriteButtonsFullAfterClick).toHaveLength(1);

  });
});