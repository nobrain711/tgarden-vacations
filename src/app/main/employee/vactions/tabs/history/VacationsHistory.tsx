import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Calendar from "./Calendar";
import List from "./List";

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
            width: "100%", // 전체 너비를 100%로 설정
            maxWidth: "210px", // 최대 너비 설정 (필요에 따라 조정)
          }}
        >
          <Button
            onClick={() => setAlignment("calendar")}
            sx={{
              flex: 1,
              borderRadius: "25px",
              backgroundColor: alignment === "calendar" ? "#ffffff" : "#E2E8F0",
              color: "#000000",
              fontSize: "18px", // 글씨 크기 조정
              padding: "20px", // 버튼 내부 여백 조정
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
              fontSize: "18px", // 글씨 크기 조정
              padding: "5px", // 버튼 내부 여백 조정
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
