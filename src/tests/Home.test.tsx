import App from "../App";
import { renderWithRouterAndRedux } from "./helpers/RenderWith";

describe(('Home'), () => {
  it('should render Home', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/'] });
  });
});