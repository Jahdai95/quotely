import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, vi, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

import AddQuote from "./addQuote";
import { QuotesProvider } from "../../providers/quotes.provider";

describe("Should render AddQuote component", () => {
  const getRender = () => {
    return render(
      <QuotesProvider>
        <AddQuote open handleClose={() => vi.fn()} />
      </QuotesProvider>
    );
  };
  test("Should to add quote", async () => {
    getRender();

    const input = screen.getByTestId("input-add-quote");
    await userEvent.click(input);
    fireEvent.change(input, {
      target: { value: "La inteligencia no es sabiduría." },
    });
    expect(input).toHaveValue("La inteligencia no es sabiduría.");

    const button = screen.getByText("Guardar");
    await userEvent.click(button);
  });

  it("Should macth snapshot", () => {
    const { container } = getRender();
    expect(container).toMatchSnapshot();
  });
});
