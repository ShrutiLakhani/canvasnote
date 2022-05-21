import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import "./ColorPalette.css";

export function ColorPalette({ noteCard, setNoteCard }) {
  const colors = [
    "#d1d1d1",
    "#e1dbd6",
    "#e2e2e2",
    "#edf2fb",
    "#d7e3fc",
    "#ccdbfd",
    "#FF0000",
  ];
  const [paletteDisplay, setPaletteDisplay] = useState(false);
  return (
    <div
      className="palette-btn"
      onMouseOver={() => {
        setPaletteDisplay(!paletteDisplay);
      }}
      onMouseOut={() => {
        setPaletteDisplay(!paletteDisplay);
      }}
      style={{ color: paletteDisplay ? "grey" : "black" }}
    >
      <span class="material-symbols-outlined palette-style">palette</span>
      <div
        className={`${paletteDisplay ? "container-palette" : "display-none"}`}
      >
        {colors.map((color, index) => {
          return (
            <div
              key={index}
              className="palette-box"
              style={{
                backgroundColor: color,
                border: noteCard.selectedBackgroundColor === color,
              }}
              onClick={() => {
                setNoteCard({
                  ...noteCard,
                  selectedBackgroundColor: color,
                });
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
