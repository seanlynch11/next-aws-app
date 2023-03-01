"use client";
import { useRef, useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const CANVAS_X = 64;
const CANVAS_Y = 64;

type CellProps = {
  x: number;
  y: number;
  color: string;
  setFocus: Function;
};

function Cell({ x, y, color, setFocus }: CellProps) {
  return (
    <div
      tabIndex={x + 1}
      onClick={() => setFocus({ x, y })}
      className="border border-transparent p-2 hover:border-black focus:border-dashed focus:border-black"
      style={{ backgroundColor: color }}
    ></div>
  );
}

function Grid({
  grid,
  setFocus,
}: {
  grid: { x: number; y: number; color: string }[][];
  setFocus: Function;
}) {
  return (
    <>
      <div className="flex flex-row overflow-auto">
        {grid.map((col, colNum) => (
          <div
            key={colNum}
            className="flex flex-col border-black first:ml-auto first:border-l-8 last:mr-auto last:border-r-8"
          >
            {col.map((cell) => (
              <div className=" border-black first:border-t-4 last:border-b-8">
                <Cell key={cell.x} {...cell} setFocus={setFocus}></Cell>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default function Canvas() {
  const pickedColor = useRef("#000000");
  const [focusedCell, setFocusedCell] = useState(
    undefined as unknown as { x: number; y: number } | undefined
  );
  const [grid, setGrid] = useState(
    Array(CANVAS_Y)
      .fill(0)
      .map((_, y) =>
        Array(CANVAS_X)
          .fill(0)
          .map((_, x) => ({ x, y, color: "#FFFFFF" }))
      )
  );

  const setColor = (color: string) => {
    pickedColor.current = color;
  };

  const setFocus = ({ x, y }: { x: number; y: number }) => {
    console.log(x, y);
    setFocusedCell({ x, y });
  };

  const paintCell = () => {
    if (focusedCell) {
      setGrid((grid) =>
        grid.map((row, rowY) =>
          rowY == focusedCell.y
            ? row.map((cell, cellX) =>
                cellX == focusedCell.x
                  ? { ...cell, color: pickedColor.current }
                  : cell
              )
            : row
        )
      );
      setFocusedCell(undefined);
    }
  };

  return (
    <>
      <div className="h-screen overflow-auto bg-gradient-to-r from-pink-600 to-violet-600">
        <div className="sticky top-0 flex border-b-4 border-black bg-gradient-to-b from-cyan-400 to-cyan-500 p-3">
          <div className="flex rounded-full bg-slate-200 p-2 shadow-md shadow-cyan-900">
            <input
              onChange={(e) => setColor(e.target.value)}
              type="color"
              className="h-10 w-10 cursor-pointer rounded-full"
            ></input>
            {focusedCell ? (
              <button className="px-2" onClick={paintCell}>
                <CheckIcon className="h-10 w-10" />
              </button>
            ) : undefined}
          </div>
        </div>
        <Grid grid={grid} setFocus={setFocus}></Grid>
      </div>
    </>
  );
}
