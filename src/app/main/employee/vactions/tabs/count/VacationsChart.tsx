import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const VacationsChart = () => {
  // totalVacations, usedVacations는 임시 데이터 입니다.
  const totalVacations = 27.0;
  const [usedVacations, setUsedVacations] = useState<number>(1.0);
  // 데이터 라벨
  const labels = ["有給休暇", "残日"];

  // chart에 관한 옵션들
  const options: ApexOptions = {
    // chart에 관한 옵션
    chart: {
      // chart의 animations에 관한 설절
      animations: {
        // animation의 속도
        speed: 400,
        // 점짐적 애니매이션의 옵션
        animateGradually: {
          enabled: false,
        },
      },
      // chart의 타입
      type: "donut",
    },
    // chart의 색상 설정
    colors: ["#A9A9A9", "#1E90FF"],
    // chart에 들어가는 label 값 할당
    labels: labels,
    // 차트의 세부적인 옵션 설정
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
    // 차트내의 데이터 정보 표시 여부
    dataLabels: {
      enabled: false,
    },
    // 차트의 데이터 안내문 표시 여부
    legend: {
      show: false,
    },
  };

  // 차트에서 사용할 데이터에 관한 설정
  const series = [totalVacations - usedVacations, usedVacations];

  return (
    <div className="w-400">
      {/* 차트 제목 */}
      <h2 className="text-20 grid justify-items-start">有給休暇（日数）</h2>
      {/* 차트 */}
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={350}
      />
      {/* 차트 정보 */}
      <div className="text-center mt-6">
        <span className="text-28 text-[#1E90FF]">
          {usedVacations.toFixed(1)}
        </span>
        <span> / </span>
        <span className="text-24 text-[#A9A9A9] ">
          {totalVacations.toFixed(1)}
        </span>
      </div>
    </div>
  );
};
