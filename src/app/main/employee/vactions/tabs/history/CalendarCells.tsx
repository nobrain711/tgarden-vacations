import React from "react";

// CellProps에 라벨 추가
interface CellProps {
  day: number;
  month: number;
  year: number;
  isWeekend: boolean;
  isToday: boolean;
  label?: string; // 추가된 라벨 속성
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
    const isToday =
      day === todayDate && month - 1 === todayMonth && year === todayYear;

    const isWeekend = weekends.includes(
      new Date(year, month - 1, day).getDay()
    );

    const isSelectedMonth = month === selectedMonth;

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

    if (!isSelectedMonth) {
      cellStyle += " opacity-50";
    }

    return cellStyle;
  };

  return (
    <div className="grid grid-cols-7 w-full h-full">
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
          {cell.label && (
            <div className="absolute bottom-1 left-1 text-xs bg-orange-800 p-1 rounded w-full text-white">
              {cell.label}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CalendarCells;
