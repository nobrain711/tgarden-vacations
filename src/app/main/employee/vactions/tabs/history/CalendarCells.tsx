import React from "react";

// 각 셀의 속성 정의
interface CellProps {
  day: number;
  month: number;
  year: number;
  isWeekend: boolean; // 주말인지 확인(글씨 색 변경)
  isToday: boolean; // 오늘인지 확인(오늘일 경우 셀의 색 변경)
  label?: string; // 셀에 표시될 라벨
  type?: string; // 라벨의 유형
}

// CalendarCells 컴포넌트 정의
const CalendarCells: React.FC<{
  days: string[]; // 요일 목록
  weekends: number[]; // 주말의 인덱스
  todayDate: number; // 오늘의 날짜
  todayMonth: number; // 오늘의 달
  todayYear: number; // 오늘의 연도
  cellsData: CellProps[]; // 각 셀의 데이터
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
  // 각 셀의 스타일을 반환하는 함수
  const getCellStyle = (day: number, month: number, year: number): string => {
    const isToday =
      day === todayDate && month - 1 === todayMonth && year === todayYear;

    const isWeekend = weekends.includes(
      new Date(year, month - 1, day).getDay()
    );

    const isSelectedMonth = month === selectedMonth;

    let cellStyle = "py-28 px-4 border border-gray-200 relative"; // 기본 셀 스타일
    if (isToday) {
      cellStyle += " bg-yellow-50"; // 오늘일 경우 셀 색깔을 노랑색으로 표시
    } else if (isWeekend) {
      cellStyle += " bg-gray-100"; // 주말일 경우 셀 색깔을 회색으로 표시
      if (new Date(year, month - 1, day).getDay() === 0) {
        cellStyle += " text-red-500"; // 일요일의 경우 셀 색깔을 빨간색으로 표시
      } else if (new Date(year, month - 1, day).getDay() === 6) {
        cellStyle += " text-blue-500"; // 토요일의 경우 셀 색깔을 파란색으로 표시
      }
    }

    if (!isSelectedMonth) {
      cellStyle += " opacity-50";
    }

    return cellStyle;
  };

  // 라벨의 스타일을 반환하는 함수
  const getLabelStyle = (type?: string): string => {
    switch (type) {
      case "有給休暇 (全休)":
        return "bg-blue-800";
      case "有給休暇 (半休)":
        return "bg-orange-800";
      case "本社出勤":
        return "bg-green-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="grid grid-cols-7 w-full h-full">
      {/* 요일 표시 */}
      {days.map((day, index) => (
        <div
          key={index}
          className="text-center font-bold bg-indigo-700 text-white py-2 border border-white"
        >
          {day}
        </div>
      ))}
      {/* 각 셀의 데이터 표시 */}
      {cellsData.map((cell, index) => (
        <div
          key={index}
          className={getCellStyle(cell.day, cell.month, cell.year)}
        >
          <span className="absolute top-1 right-1">{cell.day}</span>
          {/* 라벨 표시 */}
          {cell.label && (
            <div
              className={`absolute bottom-1 left-1 text-xs ${getLabelStyle(cell.type)} p-1 rounded w-full text-white`}
            >
              {cell.label}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CalendarCells;
