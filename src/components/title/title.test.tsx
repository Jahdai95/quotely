import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, it, expect } from "vitest";
import Title from "./title";
import { QuotesProvider } from "../../providers/quotes.provider";

describe("Should render Title component", () => {
  const getRender = () => {
    return render(
      <QuotesProvider>
        <Title />
      </QuotesProvider>
    );
  };
  test("Button should click", async () => {
    getRender();

    const button = screen.getByTestId("button-add-quote");
    await userEvent.click(button);
  });

  it("Should macth snapshot", () => {
    const { container } = getRender();
    expect(container).toMatchSnapshot();
  });
});
