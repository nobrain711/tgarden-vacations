import Typography from "@mui/material/Typography";
import { VacationsChart } from "./VacationsChart";
import IconButton from "@mui/material/IconButton";
import { useAppDispatch } from "app/store/hooks";
import { openDialog } from "@fuse/core/FuseDialog/fuseDialogSlice";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { VacationsDialog } from "./dialog/VacationsDialog";

export const VacationsCount = () => {
  const dispatch = useAppDispatch();

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
            <IconButton
              aria-label=""
              onClick={() =>
                dispatch(
                  openDialog({
                    children: <VacationsDialog />,
                  })
                )
              }
            >
              <FuseSvgIcon>heroicons-outline:question-mark-circle</FuseSvgIcon>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
