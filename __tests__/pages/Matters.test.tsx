import { render, screen } from "@testing-library/react";
import MattersPage from "@/app/matters/page";

describe("Matters Page", () => {
  it("renders the matter overview heading", () => {
    render(<MattersPage />);
    expect(screen.getByText("Matter Overview")).toBeInTheDocument();
  });

  it("displays matter entries", () => {
    render(<MattersPage />);
    expect(screen.getByText("Smith v. Johnson")).toBeInTheDocument();
    expect(screen.getByText("Estate of Williams")).toBeInTheDocument();
    expect(screen.getByText("Garcia Employment Dispute")).toBeInTheDocument();
  });

  it("displays new matter button", () => {
    render(<MattersPage />);
    expect(screen.getByText("+ New Matter")).toBeInTheDocument();
  });

  it("shows matter details", () => {
    render(<MattersPage />);
    expect(screen.getByText(/John Smith/)).toBeInTheDocument();
    expect(screen.getByText(/Civil Litigation/)).toBeInTheDocument();
  });
});
