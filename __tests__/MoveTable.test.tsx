import { render, screen } from "@testing-library/react";
import dummy from "../app/dummy.json";
import MoveTable from "../components/MoveTable";
import "@testing-library/jest-dom";

describe("MoveTable", () => {
  it("should have psyshock", async () => {
    await render(<MoveTable pokemon={dummy} />);

    const myElement = screen.getByText("psyshock");

    expect(myElement).toBeInTheDocument();
  });
  it("should have zen-headbutt", async () => {
    await render(<MoveTable pokemon={dummy} />);

    const myElement = screen.getByText("zen-headbutt");

    expect(myElement).toBeInTheDocument();
  });
  it("should have expanding-force", async () => {
    await render(<MoveTable pokemon={dummy} />);

    const myElement = screen.getByText("expanding-force");

    expect(myElement).toBeInTheDocument();
  });
});
