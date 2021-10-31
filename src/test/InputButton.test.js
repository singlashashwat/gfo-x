import { render } from "@testing-library/react";
import InputButton from "../components/InputButton";

describe("Button Component", () => {
  it("rendered Button", () => {
    const { getByTestId } = render(<InputButton />);
    const button = getByTestId("button");
    expect(button).toBeTruthy();
  });
});
