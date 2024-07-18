import {
  Box,
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import Calendar from "./Calendar";
import List from "./List";

export const VacationsHistory = () => {
  const [alignment, setAlignment] = useState("calendar");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div className="flex flex-col items-center mt-6 mb-6">
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{
          borderRadius: "50px",
          boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
        }}
      >
        <ToggleButton
          value="calendar"
          aria-label="calendar"
          sx={{ borderRadius: "50px 0 0 50px" }}
        >
          カレンダー
        </ToggleButton>
        <ToggleButton
          value="list"
          aria-label="list"
          sx={{ borderRadius: "0 50px 50px 0" }}
        >
          リスト
        </ToggleButton>
      </ToggleButtonGroup>
      {alignment === "calendar" && <Calendar />}
      {alignment === "list" && <List />}
    </div>
  );
};
