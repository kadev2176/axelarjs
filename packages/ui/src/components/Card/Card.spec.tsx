import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import * as stories from "./Card.stories";

const { Default } = composeStories(stories);

describe("Card", () => {
  it("renders Default component story without breaking", () => {
    const { container } = render(<Default />);
    expect(container).toBeVisible();
  });
});
