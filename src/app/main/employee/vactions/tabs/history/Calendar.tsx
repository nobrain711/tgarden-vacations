import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarCells from "./CalendarCells";

const listData = [
  {
    id: 1,
    date: "2024/07/18",
    type: "有給休暇 (全休)",
    hours: "8h",
    remarks: "zxcv",
  },
  {
    id: 2,
    date: "2024/07/19",
    type: "有給休暇 (半休)",
    hours: "4h",
    remarks: "abc",
  },
  { id: 3, date: "2024/07/20", type: "本社出勤", hours: "8h", remarks: "def" },
];

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(
    currentDate.getMonth() + 1
  );

  const moveToPreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
      setSelectedMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const moveToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
      setSelectedMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const moveToToday = () => {
    setCurrentDate(new Date());
    setSelectedMonth(new Date().getMonth() + 1);
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const daysInMonth = lastDayOfMonth.getDate();

  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

  const weekendIndices = [0, 6];

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const cellsData = [];

  for (let i = firstDayOfMonth.getDay() - 1; i >= 0; i--) {
    cellsData.push({
      day: new Date(year, month, 0).getDate() - i,
      month: month === 0 ? 12 : month,
      year: month === 0 ? year - 1 : year,
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dateStr = `${year}/${String(month + 1).padStart(2, "0")}/${String(i).padStart(2, "0")}`;
    const listItem = listData.find((item) => item.date === dateStr);

    cellsData.push({
      day: i,
      month: month + 1,
      year: year,
      type: listItem ? listItem.type : undefined,
      label: listItem ? listItem.type : undefined,
    });
  }

  const totalCells = 42;
  const remainingCells = totalCells - cellsData.length;

  for (let i = 1; i <= remainingCells; i++) {
    cellsData.push({
      day: i,
      month: month === 11 ? 1 : month + 2,
      year: month === 11 ? year + 1 : year,
    });
  }

  return (
    <div className="flex-1 flex flex-col flex-wrap w-full max-w-screen-xl mx-auto ng-star-inserted">
      <div className="flex-1 relative">
        <div className=" ng-star-inserted">
          <div className="h-full">
            <CalendarHeader
              year={year}
              month={currentDate.toLocaleString("default", { month: "long" })}
              onPreviousMonth={moveToPreviousMonth}
              onNextMonth={moveToNextMonth}
              onToday={moveToToday}
            />
            <CalendarCells
              days={daysOfWeek}
              weekends={weekendIndices}
              todayDate={todayDate}
              todayMonth={todayMonth}
              todayYear={todayYear}
              cellsData={cellsData}
              selectedMonth={selectedMonth}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
