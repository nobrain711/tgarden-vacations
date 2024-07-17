import React, { SyntheticEvent, useState } from "react";
import Tabs from "@mui/material/Tabs";
import { Box, Tab } from "@mui/material";
import { VacationsCount } from "./count/VacationsCount";
import { TabPanel } from "@mui/base";
import { VacationsHistory } from "./history/VacationsHistory";

export const VacationsTabs = () => {
  const [tabsNumber, setTabsNumber] = useState<number>(0);

  const handlerTabsPage = (event: SyntheticEvent, pageNumber: number) => {
    setTabsNumber(pageNumber);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabsNumber}
          onChange={handlerTabsPage}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab value={0} label="休暇日数" />
          <Tab value={1} label="休暇履歴" />
        </Tabs>
      </Box>
      {tabsNumber === 0 ? <VacationsCount />: <VacationsHistory />}
    </Box>
  );
};
