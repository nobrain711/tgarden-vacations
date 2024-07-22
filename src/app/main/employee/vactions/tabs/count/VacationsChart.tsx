import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { RootState } from "app/store/store";
import { selectVacations } from "../../store/VacationsSlice";

export const VacationsChart = () => {
  // redux롷 부터 휴가 정보 데이터 반환
  const vacations = useSelector((state: RootState) => selectVacations(state));
  const totalVacations = vacations.total;
  const usedVacations = vacations.used;

  // totalVacations, usedVacations는 임시 데이터 입니다.
  // const totalVacations = 27.0;
  // const [usedVacations, setUsedVacations] = useState<number>(1.0);
  
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
    <>
      <div className="flex items-start justify-between">
        <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
          有給休暇（日数）
        </Typography>
      </div>
      <div className="flex flex-col flex-auto">
        <ReactApexChart
          className="flex flex-auto items-center justify-center w-full h-full"
          options={options}
          series={series}
          type="donut"
          height={200}
        />
      </div>
      <div className="mt-8">
        <div className="-my-3 divide-y">
          <div className="flex flex-row justify-center items-center">
            <Typography className="font-bold text-6xl text-blue-400 mx-10">
              {usedVacations}
            </Typography>
            <Typography className="font-bold text-3xl text-gray-400">
              {" "}
              / {totalVacations}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};
