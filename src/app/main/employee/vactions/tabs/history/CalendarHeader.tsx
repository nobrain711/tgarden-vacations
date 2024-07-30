import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import React from "react";

// CalendarHeader 컴포넌트의 props 정의
interface CalendarHeaderProps {
  year: number; // 표시할 연도
  month: string; // 표시할 달
  onPreviousMonth: () => void; // 이전 달로 이동하는 함수
  onNextMonth: () => void; // 다음 달로 이동하는 함수
  onToday: () => void; // 오늘 날짜로 이동하는 함수
}

// CalendarHeader 컴포넌트 정의
const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  year,
  month,
  onPreviousMonth,
  onNextMonth,
  onToday,
}) => {
  return (
    <div className="flex justify-between w-full mb-20 px-4">
      {/* 이전 달로 이동하는 버튼 */}
      <button
        className="px-9 py-7 bg-blue-gray-800 text-white rounded hover:bg-blue-gray-900"
        onClick={onPreviousMonth}
      >
        <FuseSvgIcon className="text-48" size={20} color="inherit">
          heroicons-outline:chevron-left
        </FuseSvgIcon>
      </button>
      {/* 연도와 월 표시 */}
      <h2 className="text-2xl font-semibold text-center">
        {year}年 {month}
      </h2>
      <div className="flex">
        {/* 오늘 날짜로 이동하는 버튼 */}
        <button
          className="px-9 py-7 font-semibold bg-blue-gray-800 text-white rounded hover:bg-blue-gray-900"
          onClick={onToday}
        >
          今月
        </button>
        {/* 다음 달로 이동하는 버튼 */}
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
