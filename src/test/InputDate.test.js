import { render, fireEvent } from "@testing-library/react";
import InputDate from "../components/InputDate";

describe("Button Component", () => {
    it("rendered Button", () => {
      const { getByTestId } = render(<InputDate />);
      const startDateInput = getByTestId("js-datepicker");
      expect(startDateInput).toBeTruthy();
    });
  });

describe("DatePicker", () => {
  test("Change datepicker value", () => {
    const { getByTestId } = render(<InputDate />);

    const startDateInput = getByTestId("js-datepicker");
    fireEvent.change(startDateInput, { target: { value: "2021/01/01" } });
    expect(startDateInput.value).toBe("2021/01/01");
  });
});

describe("DatePicker", () => {
  test("No datepicker value", () => {
    const { getByTestId } = render(<InputDate />);

    const startDateInput = getByTestId("js-datepicker");
    fireEvent.change(startDateInput, {});
    expect(startDateInput.value).toBe("");
  });
});
