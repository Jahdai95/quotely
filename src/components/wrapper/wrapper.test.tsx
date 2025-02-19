import { render } from "@testing-library/react";
import { describe, test, it, expect } from "vitest";
import Wrapper from "./wrapper";
import { QuotesProvider } from "../../providers/quotes.provider";

describe("Should render Widget component", () => {
  const getRender = () => {
    return render(
      <QuotesProvider>
        <Wrapper>
          <h1>No dejes para mañana lo que puedes hacer hoy</h1>
        </Wrapper>
      </QuotesProvider>
    );
  };

  it("Should macth snapshot", () => {
    const { container } = getRender();
    expect(container).toMatchSnapshot();
  });
});
