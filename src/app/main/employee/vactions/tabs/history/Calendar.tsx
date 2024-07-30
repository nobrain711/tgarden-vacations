import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarCells from "./CalendarCells";

// 더미 데이터를 정의
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

// Calendar 컴포넌트 정의
const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // 현재 날짜를 상태로 관리
  const [selectedMonth, setSelectedMonth] = useState(
    currentDate.getMonth() + 1
  ); // 선택된 월을 상태로 관리

  // 이전 달로 이동하는 함수
  const moveToPreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
      setSelectedMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  // 다음 달로 이동하는 함수
  const moveToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
      setSelectedMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  // 오늘 날짜로 이동하는 함수
  const moveToToday = () => {
    setCurrentDate(new Date());
    setSelectedMonth(new Date().getMonth() + 1);
  };

  const year = currentDate.getFullYear(); // 현재 연도
  const month = currentDate.getMonth(); // 현재 월

  const firstDayOfMonth = new Date(year, month, 1); // 현재 월의 첫 번째 날
  const lastDayOfMonth = new Date(year, month + 1, 0); // 현재 월의 마지막 날

  const daysInMonth = lastDayOfMonth.getDate(); // 현재 월의 총 일수

  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"]; // 요일 배열

  const weekendIndices = [0, 6]; // 주말 인덱스 (일요일, 토요일)

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const cellsData = []; // 셀 데이터를 저장할 배열

  // 이전 달의 마지막 며칠을 현재 월의 첫 번째 주에 표시
  for (let i = firstDayOfMonth.getDay() - 1; i >= 0; i--) {
    cellsData.push({
      day: new Date(year, month, 0).getDate() - i,
      month: month === 0 ? 12 : month,
      year: month === 0 ? year - 1 : year,
    });
  }

  // 현재 월의 각 날을 셀 데이터에 추가
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

  // 다음 달의 첫 번째 주를 채우기 위해 추가 셀을 생성
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
            {/* CalendarHeader 컴포넌트 렌더링 */}
            <CalendarHeader
              year={year}
              month={currentDate.toLocaleString("default", { month: "long" })}
              onPreviousMonth={moveToPreviousMonth}
              onNextMonth={moveToNextMonth}
              onToday={moveToToday}
            />
            {/* CalendarCells 컴포넌트 렌더링 */}
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
