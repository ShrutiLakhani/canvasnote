import { useState } from "react";
import { useFilter } from "../../context/filter-context";
import "./SortBy.css";
export function SortBy() {
  const { filterDispatch } = useFilter();
  const [displaySort, setDisplaySort] = useState(false);

  return (
    <div className="sort-by-filter">
      <p className="sort-title" onClick={() => setDisplaySort(!displaySort)}>
        Sort By:
      </p>
      <div
        className={
          displaySort ? "sort-options display-dropdown" : "sort-options"
        }
      >
        <div className="sort-option">Date Created</div>
        <p
          className="select-option"
          data-value="NEWEST-TO-OLDEST"
          onClick={() =>
            filterDispatch({ type: "SORTBY", payload: "NEWEST-TO-OLDEST" })
          }
        >
          Newest to Oldest
        </p>
        <p
          className="select-option"
          data-value="OLDEST-TO-NEWEST"
          onClick={() =>
            filterDispatch({ type: "SORTBY", payload: "OLDEST-TO-NEWEST" })
          }
        >
          oldest to Newest
        </p>

        <div className="sort-option">Priority</div>
        <p
          className="select-option"
          data-value="HIGH-TO-LOW"
          onClick={() =>
            filterDispatch({ type: "SORTBY", payload: "HIGH-TO-LOW" })
          }
        >
          High to Low
        </p>
        <p
          className="select-option"
          data-value="LOW-TO-HIGH"
          onClick={() =>
            filterDispatch({ type: "SORTBY", payload: "LOW-TO-HIGH" })
          }
        >
          Low to High
        </p>
      </div>
    </div>
  );
}
