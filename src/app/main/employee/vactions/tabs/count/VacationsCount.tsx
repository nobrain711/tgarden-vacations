import Typography from "@mui/material/Typography";
import { VacationsChart } from "./VacationsChart";

export const VacationsCount = () => {
  return (
    <div className="p-48">
      <div className="grid grid-flow-col justify-stretch">
        <div className="p-16">
          <div className="grid justify-items-center">
            <VacationsChart />
          </div>
        </div>
        <div className="p-16">
          <div className="grid justify-items-start">
            <Typography className="font-bold text-md">
              入社日:2020年02月01日
            </Typography>
            <Typography className="font-bold text-md mb-32">
              有給休暇:14日　(勤務年数:4年)
            </Typography>
            <Typography className="font-bold text-md text-pink-A100">
              ※유호기간이 경과한 유급휴가는 소멸됩니다.
            </Typography>
            <Typography className="font-bold text-md text-red-A700">
              3년차 14일 중 1.0일(유호기간: 2025/01/31)
            </Typography>
            <Typography className="font-bold text-md text-red-A700">
              4년차 14일 중 0.0일(유호기간: 2026/01/31)
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
