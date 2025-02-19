import { render } from "@testing-library/react";
import { describe, vi, it, expect } from "vitest";
import Modal from "./modal";
import { QuotesProvider } from "../../providers/quotes.provider";

describe("Should render Modal component", () => {
  const getRender = () => {
    return render(
      <QuotesProvider>
        <Modal handleClose={() => vi.fn()} onSave={() => vi.fn()} open>
          <h2>Contenido del modal</h2>
        </Modal>
      </QuotesProvider>
    );
  };

  it("Should macth snapshot", () => {
    const { container } = getRender();
    expect(container).toMatchSnapshot();
  });
});
