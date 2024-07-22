import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
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
    <div className="flex justify-between w-full mb-20 px-4">
      <button
        className="px-9 py-7 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={onPreviousMonth}
      >
        <FuseSvgIcon className="text-48" size={20} color="inherit">
          heroicons-outline:chevron-left
        </FuseSvgIcon>
      </button>
      <h2 className="text-2xl font-semibold text-center">
        {year}年 {month}
      </h2>
      <div className="flex">
        <button
          className="px-9 py-7 font-semibold bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onToday}
        >
          今月
        </button>
        <button
          className="px-9 py-7 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onNextMonth}
        >
          <FuseSvgIcon className="text-48" size={20} color="inherit">
            heroicons-outline:chevron-right
          </FuseSvgIcon>
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
