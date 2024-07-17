// CalendarHeader.tsx

import React from "react";

interface CalendarHeaderProps {
  year: number;
  month: string;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  year,
  month,
  onPreviousMonth,
  onNextMonth,
  onToday,
}) => {
  return (
    <div className="flex justify-center w-full mb-4 px-4">
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={onPreviousMonth}
      >
        Prev
      </button>
      <div className="text-xl font-semibold">
        {year}年 {month}
      </div>
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={onToday}
      >
        今月
      </button>
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={onNextMonth}
      >
        Next
      </button>
    </div>
  );
};

export default CalendarHeader;
