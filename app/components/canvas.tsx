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
      tabIndex={y + 1}
      onClick={() => setFocus({ x, y })}
      className="p-2 border border-transparent hover:border-black focus:border-black focus:border-dashed"
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
      <div className="grid grid-flow-row overflow-auto">
        {grid.map((row, rowNum) => (
          <div key={rowNum} className="grid grid-flow-col">
            {row.map((cell) => (
              <Cell key={cell.x} {...cell} setFocus={setFocus}></Cell>
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
      <div className="bg-black h-screen">
        <div className="flex sticky top-0 bg-slate-800 p-2">
          <div className="flex p-2 bg-slate-200 rounded-full ">
            <input
              onChange={(e) => setColor(e.target.value)}
              type="color"
              className="h-10 w-10 rounded-full cursor-pointer"
            ></input>
            {focusedCell ? (
              <button className="px-2" onClick={paintCell}>
                <CheckIcon className="h-10 w-10" />
              </button>
            ) : undefined}
          </div>
        </div>
        <div className="">
          <Grid grid={grid} setFocus={setFocus}></Grid>
        </div>
      </div>
    </>
  );
}
