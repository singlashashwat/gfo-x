import { render, fireEvent } from "@testing-library/react";
import TextArea from "../components/TextArea";

describe("TextArea Component", () => {
  it("rendered TextArea", () => {
    const { getByTestId } = render(<TextArea />);
    const textArea = getByTestId("textarea");
    expect(textArea).toBeTruthy();
  });
});

describe("TextArea Component", () => {
  test("rendered TextArea value", () => {
    const { getByTestId } = render(<TextArea />);

    const startDateInput = getByTestId("textarea");
    fireEvent.change(startDateInput, { target: { value: "" } });
    expect(startDateInput.value).toBe("");
  });
});
