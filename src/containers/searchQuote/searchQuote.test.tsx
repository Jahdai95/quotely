import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

import SearchQuote from "./searchQuote";
import { QuotesProvider } from "../../providers/quotes.provider";

describe("Should render AddQuote component", () => {
  const getRender = () => {
    return render(
      <QuotesProvider>
        <SearchQuote />
      </QuotesProvider>
    );
  };
  test("Should to search quote", async () => {
    getRender();

    const input = screen.getByTestId("input-search-quote");
    await userEvent.click(input);
    fireEvent.change(input, {
      target: { value: "palabra" },
    });
    expect(input).toHaveValue("palabra");

    const button = screen.getByTestId("button-clear-input");
    await userEvent.click(button);
  });

  it("Should macth snapshot", () => {
    const { container } = getRender();
    expect(container).toMatchSnapshot();
  });
});
