import { render, screen } from "@testing-library/react";
import Card from "@/components/Card";

describe("Card", () => {
  it("renders children content", () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies additional className", () => {
    const { container } = render(<Card className="custom-class">Content</Card>);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
