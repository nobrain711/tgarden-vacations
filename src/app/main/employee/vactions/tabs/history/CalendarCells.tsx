// CalendarCells.tsx

import React from "react";

interface CellProps {
  day: number;
  month: number;
  year: number;
  isWeekend: boolean;
  isToday: boolean;
}

const CalendarCells: React.FC<{
  days: string[];
  weekends: number[];
  todayDate: number;
  todayMonth: number;
  todayYear: number;
  cellsData: CellProps[];
  selectedMonth: number; // 선택된 달
}> = ({
  days,
  weekends,
  todayDate,
  todayMonth,
  todayYear,
  cellsData,
  selectedMonth,
}) => {
  const getCellStyle = (day: number, month: number, year: number): string => {
    // 오늘 날짜인지 확인
    const isToday =
      day === todayDate && month - 1 === todayMonth && year === todayYear;

    // 주말 여부 확인
    const isWeekend = weekends.includes(
      new Date(year, month - 1, day).getDay()
    );

    // 선택된 달 여부 확인
    const isSelectedMonth = month === selectedMonth;

    // 스타일 조건 설정
    let cellStyle = "py-28 px-4 border border-gray-200 relative";
    if (isToday) {
      cellStyle += " bg-yellow-50";
    } else if (isWeekend) {
      cellStyle += " bg-gray-100";
      if (new Date(year, month - 1, day).getDay() === 0) {
        cellStyle += " text-red-500";
      } else if (new Date(year, month - 1, day).getDay() === 6) {
        cellStyle += " text-blue-500";
      }
    }

    // 선택된 달이 아닌 경우 흐린 글씨 처리
    if (!isSelectedMonth) {
      cellStyle += " opacity-50"; // 흐린 글씨 스타일 클래스
    }

    return cellStyle;
  };

  return (
    <div className="grid grid-cols-7 w-full h-full ">
      {days.map((day, index) => (
        <div
          key={index}
          className="text-center font-bold bg-indigo-700 text-white py-2 border border-white"
        >
          {day}
        </div>
      ))}
      {cellsData.map((cell, index) => (
        <div
          key={index}
          className={getCellStyle(cell.day, cell.month, cell.year)}
        >
          <span className="absolute top-1 right-1">{cell.day}</span>
        </div>
      ))}
    </div>
  );
};

export default CalendarCells;
