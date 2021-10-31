import { render} from "@testing-library/react";
import TextArea from "../components/TextArea";

describe("TextArea Component", () => {
  it("rendered TextArea", () => {
    const { getByTestId } = render(<TextArea />);
    const textArea = getByTestId("textarea");
    expect(textArea).toBeTruthy();
  });
});
