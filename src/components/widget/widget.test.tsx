import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Widget from "./widget";
import { QuotesProvider } from "../../providers/quotes.provider";

describe("Should render Widget component", () => {
  const getRender = () => {
    return render(
      <QuotesProvider>
        <Widget />
      </QuotesProvider>
    );
  };

  it("Should macth snapshot", () => {
    const { container } = getRender();
    expect(container).toMatchSnapshot();
  });
});
