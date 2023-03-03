"use client";
import { useEffect, useRef, useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";

import { listCells } from "@/graphql/queries";
import {
  Cell,
  ListCellsQuery,
  CreateCellMutation,
  UpdateCellMutation,
} from "@/API";
import { createCell, updateCell } from "@/graphql/mutations";

const CANVAS_X = 64;
const CANVAS_Y = 64;

function CellElement({
  x,
  y,
  color,
  setFocus,
}: Cell & {
  setFocus: Function;
}) {
  return (
    <div
      tabIndex={x + 1}
      onClick={() => setFocus({ x, y })}
      className="border border-transparent p-1 hover:border-black focus:border-dashed focus:border-black"
      style={{ backgroundColor: color as string }}
    ></div>
  );
}

function Grid({ grid, setFocus }: { grid: Cell[][]; setFocus: Function }) {
  return (
    <>
      <div className="flex flex-row overflow-auto">
        {grid.map((col, colNum) => (
          <div
            key={colNum}
            className="flex flex-col border-black first:ml-auto first:border-l-8 last:mr-auto last:border-r-8"
          >
            {col.map((cell) => (
              <div
                key={cell.x}
                className=" border-black first:border-t-4 last:border-b-8"
              >
                <CellElement {...cell} setFocus={setFocus}></CellElement>
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
          .map((_, x) => ({ x, y, color: "#FFFFFF" } as Cell))
      )
  );

  const fetchCells = async () => {
    const cellsResult = await API.graphql<GraphQLQuery<ListCellsQuery>>(
      graphqlOperation(listCells)
    );
    cellsResult.data?.listCells?.items.forEach((item) => {
      if (item) {
        grid[item.y][item.x] = item;
      }
    });
    setGrid([...grid]);
  };

  useEffect(() => {
    fetchCells();
  }, []);

  const setColor = (color: string) => {
    pickedColor.current = color;
  };

  const setFocus = ({ x, y }: { x: number; y: number }) => {
    setFocusedCell({ x, y });
  };

  const paintCell = async () => {
    if (focusedCell) {
      if (!grid[focusedCell.y][focusedCell.x].id) {
        const newCell = await API.graphql<GraphQLQuery<CreateCellMutation>>(
          graphqlOperation(createCell, {
            input: {
              x: focusedCell.x,
              y: focusedCell.y,
              color: pickedColor.current,
            },
          })
        );
      } else {
        const updatedCell = await API.graphql<GraphQLQuery<UpdateCellMutation>>(
          graphqlOperation(updateCell, {
            input: {
              id: grid[focusedCell.y][focusedCell.x].id,
              color: pickedColor.current,
              _version: grid[focusedCell.y][focusedCell.x]._version,
            },
          })
        );
      }

      fetchCells();

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
