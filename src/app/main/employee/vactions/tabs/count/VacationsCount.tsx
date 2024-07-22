import Typography from "@mui/material/Typography";
import { VacationsChart } from "./VacationsChart";
import { AppDispatch } from "app/store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "app/store/store";
import { addUsed, selectVacations } from "../../store/VacationsSlice";

export const VacationsCount = () => {
  const dispatch = useDispatch<AppDispatch>();
  const vacations = useSelector((state: RootState) => selectVacations(state));

  console.log(vacations);
  return (
    <div className="flex flex-auto w-full max-w-screen-xl mx-auto p-6 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-6 md:mt-8">
        <div className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-6">
          <VacationsChart />
        </div>
        <div className="flex flex-col flex-auto overflow-hidden">
          <Typography className="font-bold text-md">
            入社日:2020年02月01日
          </Typography>
          <Typography className="font-bold text-md">
            有給休暇:14日　(勤務年数:4年)
          </Typography>
          <div>&nbsp;</div>
          <div className="flex">
            <div className="flex-1">
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
            <div>buttom</div>
          </div>
        </div>
      </div>
    </div>
  );
};
