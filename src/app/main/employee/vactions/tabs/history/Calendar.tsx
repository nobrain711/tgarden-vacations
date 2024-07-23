import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarCells from "./CalendarCells";
// 기존 List에서 사용하는 더미 데이터
const listData = [
  { id: 1, date: "2024/07/18", type: "유급휴가", hours: "8h", remarks: "zxcv" },
  { id: 2, date: "2024/07/19", type: "반차", hours: "4h", remarks: "abc" },
  { id: 3, date: "2024/07/20", type: "본사출근", hours: "8h", remarks: "def" },
];

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(
    currentDate.getMonth() + 1
  ); // 선택된 달 정보 추가

  // 이전 달로 이동하는 함수
  const moveToPreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
      setSelectedMonth(newDate.getMonth() + 1); // 선택된 달 업데이트
      return newDate;
    });
  };

  // 다음 달로 이동하는 함수
  const moveToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
      setSelectedMonth(newDate.getMonth() + 1); // 선택된 달 업데이트
      return newDate;
    });
  };

  // 오늘 날짜로 이동하는 함수
  const moveToToday = () => {
    setCurrentDate(new Date());
    setSelectedMonth(new Date().getMonth() + 1); // 선택된 달 업데이트
  };

  // 현재 달의 첫 번째 날과 마지막 날 계산
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const daysInMonth = lastDayOfMonth.getDate(); // 현재 달의 날짜 수

  // 요일 배열
  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

  // 주말 인덱스 배열 (토요일은 6, 일요일은 0)
  const weekendIndices = [0, 6];

  // 오늘 날짜
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth(); // 오늘 날짜의 월
  const todayYear = today.getFullYear(); // 오늘 날짜의 연도

  // 날짜 셀을 구성하는 데이터 배열 생성
  const cellsData = [];

  // 이전 달의 마지막 날 표시
  for (let i = firstDayOfMonth.getDay() - 1; i >= 0; i--) {
    cellsData.push({
      day: new Date(year, month, 0).getDate() - i,
      month: month === 0 ? 12 : month, // 1월인 경우 이전 달은 12월
      year: month === 0 ? year - 1 : year, // 1월인 경우 연도는 작년
    });
  }

  // 현재 달의 날짜 추가
  for (let i = 1; i <= daysInMonth; i++) {
    const date = `${year}/${String(month + 1).padStart(2, "0")}/${String(i).padStart(2, "0")}`;
    const label = listData.find((item) => item.date === date)?.type || "";

    cellsData.push({
      day: i,
      month: month + 1,
      year: year,
      label: label, // 라벨 추가
    });
  }

  // 다음 달의 첫 번째 날 표시
  const totalCells = 42; // 달력 총 셀 개수 (7 * 6)
  const remainingCells = totalCells - cellsData.length;

  for (let i = 1; i <= remainingCells; i++) {
    cellsData.push({
      day: i,
      month: month === 11 ? 1 : month + 2, // 12월인 경우 다음 달은 1월
      year: month === 11 ? year + 1 : year, // 12월인 경우 연도는 내년
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
              selectedMonth={selectedMonth} // 선택된 달 정보 전달
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
