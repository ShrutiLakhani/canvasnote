import "./Filter.css";
import { useState } from "react";
import { useNote } from "../../context/note-context";
import { useFilter } from "../../context/filter-context";

export function Filter() {
  const [displayFilter, setDisplayFilter] = useState(false);
  const { labelList } = useNote();
  const { filterState, filterDispatch } = useFilter();
  return (
    <div className="sort-by">
      <p
        className="sort-title"
        onClick={() => setDisplayFilter(!displayFilter)}
      >
        Filter:
      </p>
      <div
        className={
          displayFilter ? "sort-options display-dropdown" : "sort-options"
        }
      >
        <button
          className="clear-filter"
          onClick={(e) => filterDispatch({ type: "CLEAR" })}
        >
          Clear All
        </button>
        <div className="sort-option">
          <p>Labels</p>
          {labelList.map((label) => (
            <label className="label filter">
              <input
                type="checkbox"
                name="label"
                value={label}
                checked={filterState.labels.find(
                  (label) => label === { label }
                )}
                onChange={(e) =>
                  filterDispatch({ type: "LABEL", payload: e.target.value })
                }
              />
              {label}
            </label>
          ))}
        </div>
        <div className="sort-option">
          <p>Priority</p>
          <label className="label filter">
            <input
              type="checkbox"
              name="priority"
              checked={filterState.priority === "1"}
              value="1"
              onChange={(e) =>
                filterDispatch({ type: "PRIORITY", payload: e.target.value })
              }
            />
            High
          </label>
          <label className="label filter">
            <input
              type="checkbox"
              name="priority"
              checked={filterState.priority === "2"}
              value="2"
              onChange={(e) =>
                filterDispatch({ type: "PRIORITY", payload: e.target.value })
              }
            />
            Medium
          </label>
          <label className="label filter">
            <input
              type="checkbox"
              name="priority"
              checked={filterState.priority === "3"}
              value="3"
              onChange={(e) =>
                filterDispatch({ type: "PRIORITY", payload: e.target.value })
              }
            />
            Low
          </label>
        </div>
      </div>
    </div>
  );
}
