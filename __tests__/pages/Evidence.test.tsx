import { render, screen } from "@testing-library/react";
import EvidencePage from "@/app/evidence/page";

describe("Evidence Page", () => {
  it("renders the evidence workspace heading", () => {
    render(<EvidencePage />);
    expect(screen.getByText("Evidence Workspace")).toBeInTheDocument();
  });

  it("displays evidence items", () => {
    render(<EvidencePage />);
    expect(
      screen.getByText("Medical Records - Dr. Thompson"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Witness Statement - Jane Doe"),
    ).toBeInTheDocument();
  });

  it("shows upload evidence button", () => {
    render(<EvidencePage />);
    expect(screen.getByText("+ Upload Evidence")).toBeInTheDocument();
  });

  it("displays search input", () => {
    render(<EvidencePage />);
    expect(
      screen.getByPlaceholderText("Search evidence..."),
    ).toBeInTheDocument();
  });
});
