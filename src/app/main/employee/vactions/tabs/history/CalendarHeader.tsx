import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import React from "react";

interface CalendarHeaderProps {
  year: number;
  month: string;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}
//カレンダーのheader(曜日、button)
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
        className="px-9 py-7 bg-blue-gray-800 text-white rounded hover:bg-blue-gray-900"
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
          className="px-9 py-7 font-semibold bg-blue-gray-800 text-white rounded hover:bg-blue-gray-900"
          onClick={onToday}
        >
          今月
        </button>
        <button
          className="px-9 py-7 bg-blue-gray-800 text-white rounded hover:bg-blue-gray-900"
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
