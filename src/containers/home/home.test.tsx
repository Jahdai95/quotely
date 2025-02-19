import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Home from "./home";
import { QuotesProvider } from "../../providers/quotes.provider";

describe("Should render AddQuote component", () => {
  const getRender = () => {
    return render(
      <QuotesProvider>
        <Home />
      </QuotesProvider>
    );
  };
  it("Should macth snapshot", () => {
    const { container } = getRender();
    expect(container).toMatchSnapshot();
  });
});
