import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Calendar from "./Calendar";
import List from "./List";
// carlendarとlistを見るページ
export const VacationsHistory = () => {
  const [alignment, setAlignment] = useState("calendar");

  return (
    <>
      <div className="flex flex-col items-center mt-6 mb-32">
        <Box
          sx={{
            display: "flex",
            borderRadius: "25px",
            backgroundColor: "#E2E8F0",
            padding: "2px",
            width: "100%",
            maxWidth: "210px",
          }}
        >
          <Button
            onClick={() => setAlignment("calendar")}
            sx={{
              flex: 1,
              borderRadius: "25px",
              backgroundColor: alignment === "calendar" ? "#ffffff" : "#E2E8F0",
              color: "#000000",
              fontSize: "18px",
              padding: "20px",
              "&:hover": {
                backgroundColor:
                  alignment === "calendar" ? "#ffffff" : "#DFE6EE",
              },
            }}
          >
            <Typography variant="button">カレンダー</Typography>
          </Button>
          <Button
            onClick={() => setAlignment("list")}
            sx={{
              flex: 1,
              borderRadius: "25px",
              backgroundColor: alignment === "list" ? "#ffffff" : "#E2E8F0",
              color: "#000000",
              fontSize: "18px",
              padding: "5px",
              "&:hover": {
                backgroundColor: alignment === "list" ? "#ffffff" : "#DFE6EE",
              },
            }}
          >
            <Typography variant="button">リスト</Typography>
          </Button>
        </Box>
      </div>
      {alignment === "calendar" && <Calendar />}
      {alignment === "list" && <List />}
    </>
  );
};
