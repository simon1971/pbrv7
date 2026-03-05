import { render, screen } from "@testing-library/react";
import Dashboard from "@/app/page";

// Mock next/link to render a simple anchor
jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) {
    return <a href={href}>{children}</a>;
  };
});

describe("Dashboard Page", () => {
  it("renders the dashboard heading", () => {
    render(<Dashboard />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("displays stat cards", () => {
    render(<Dashboard />);
    expect(screen.getByText("Active Matters")).toBeInTheDocument();
    expect(screen.getByText("Pending Intake")).toBeInTheDocument();
    expect(screen.getByText("Evidence Items")).toBeInTheDocument();
    expect(screen.getByText("Draft Documents")).toBeInTheDocument();
  });

  it("displays quick action links", () => {
    render(<Dashboard />);
    expect(screen.getByText("View Matters")).toBeInTheDocument();
    expect(screen.getByText("New Intake")).toBeInTheDocument();
    expect(screen.getByText("Evidence Workspace")).toBeInTheDocument();
    expect(screen.getByText("Draft Workspace")).toBeInTheDocument();
  });

  it("displays recent matters", () => {
    render(<Dashboard />);
    expect(screen.getByText("Recent Matters")).toBeInTheDocument();
    expect(screen.getByText("Smith v. Johnson")).toBeInTheDocument();
    expect(screen.getByText("Estate of Williams")).toBeInTheDocument();
  });
});
