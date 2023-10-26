import { render, screen } from "@testing-library/react";
import MoveTable from "@/app/components/MoveTable";
import { filterSVMoves, filterMovesCurrent } from "@/app/lib/filters";
import { sortMovesByLevel } from "@/app/lib/sorters";
import "@testing-library/jest-dom";

import moves from "./dummy2.json";

describe("MoveTable", () => {
  const filteredMoves = sortMovesByLevel(filterMovesCurrent(moves));

  it("should have expanding-force", () => {
    render(<MoveTable moves={moves} type={"psychic"} />);

    const myElement = screen.getByText("expanding force");

    expect(myElement).toBeInTheDocument();
  });

  it("should render the correct number of rows", () => {
    render(<MoveTable moves={moves} type={"psychic"} />);

    const rows = screen.getAllByRole("row");

    // We expect the number of rows to be equal to the number of moves
    expect(rows.length).toBe(filteredMoves.length + 1); // +1 for the table header row
  });

  it("should render the correct move names", () => {
    render(<MoveTable moves={moves} type={"psychic"} />);

    filteredMoves.forEach((move) => {
      const moveName = move.move.name.replace("-", " ");
      console.log(moveName);
      const myElement = screen.getByText(moveName);

      expect(myElement).toBeInTheDocument();
    });
  });

  it("should render the correct move learn methods", () => {
    render(<MoveTable moves={moves} type={"psychic"} />);

    const methods = ["level up", "tutor", "machine"];
    methods.forEach((move) => {
      const myElement = screen.getAllByText(move);

      expect(myElement[0]).toBeInTheDocument();
    });
  });

  it("should render the correct move levels", () => {
    render(<MoveTable moves={moves} type={"psychic"} />);

    filteredMoves.forEach((move) => {
      const latestMoves = filterSVMoves(move);
      const level =
        latestMoves.move_learn_method.name === "level-up"
          ? latestMoves.level_learned_at
          : "";
      if (level === "") return;
      const myElement = screen.getByText(level);

      expect(myElement).toBeInTheDocument();
    });
  });
});
