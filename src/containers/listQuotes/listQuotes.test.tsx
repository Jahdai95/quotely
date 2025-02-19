import { render, screen } from "@testing-library/react";
import { describe, test, vi, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

import ListQuotes from "./listQuotes";
import { QuotesContext } from "../../providers/quotes.provider";

import { IQuote } from "../../providers/quotes.provider";

describe("Should render ListQuotes component", () => {
  const mockData: IQuote[] = [
    {
      key: "1739755767607",
      value: "“Más vale tarde que nunca.”",
    },
    {
      key: "1739755799070",
      value: "“La conquista propia es la más grande de las victorias.” ",
    },
  ];
  const mockDataNull: IQuote[] = [];

  const getRender = (word: string, mock: IQuote[]) => {
    return render(
      <QuotesContext.Provider
        value={{ quotesData: mock, updateStorageData: () => vi.fn() }}
      >
        <ListQuotes quotetoFind={word} />
      </QuotesContext.Provider>
    );
  };

  test("Should render all quotes", async () => {
    getRender("", mockData);
  });

  test("Should delete a quote", async () => {
    getRender("conquista", mockData);

    const button = screen.getByTestId("button-delete-quote");
    await userEvent.click(button);
  });

  test("Should show alert when there is no quotes to show", async () => {
    getRender("conquista", mockDataNull);
  });

  it("Should macth snapshot", () => {
    const { container } = getRender("conquista", mockData);
    expect(container).toMatchSnapshot();
  });
});
