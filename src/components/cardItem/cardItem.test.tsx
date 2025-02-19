import { render } from "@testing-library/react";
import { describe, test, vi, it, expect } from "vitest";
import CardItem from "./cardItem";
import { QuotesProvider } from "../../providers/quotes.provider";

describe("Should render CardItem component", () => {
  const getRender = () => {
    return render(
      <QuotesProvider>
        <CardItem
          quote="Solo viven aquellos que luchan"
          handleDelete={() => vi.fn()}
          id="01"
        />
      </QuotesProvider>
    );
  };

  it("Should macth snapshot", () => {
    const { container } = getRender();
    expect(container).toMatchSnapshot();
  });
});
