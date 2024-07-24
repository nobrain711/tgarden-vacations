import {
  closeDialog,
  selectFuseDialogState,
} from "@fuse/core/FuseDialog/fuseDialogSlice";
import {
  DialogActions,
  DialogContent,
  Button,
  Dialog,
  Typography,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { RootState } from "app/store/store";
import { useAppDispatch } from "app/store/hooks";
import { Fragment } from "react";
import { useSelector } from "react-redux";

export const VacationsDialog = () => {
  const dispatch = useAppDispatch();
  const isOpen = useSelector((state: RootState) =>
    selectFuseDialogState(state)
  );

  return (
    <Fragment>
      <Dialog open={isOpen} scroll={"paper"} maxWidth="lg" fullWidth={true}>
        <DialogContent>
          <div class="flex space-x-4 border-b-4 border-black-indigo-500/50">
            <Typography className=" font-bold text-3xl">
              유급휴가제도개요 (NEW)
            </Typography>
          </div>

          <div className="py-8">
            <Typography className="font-bold text-xl ">
              1. 입사6개월미만의 사원
            </Typography>
          </div>

          <div className="py-8">
            <Typography class="text-start text-lg ml-20">
              <ul class="list-disc list-inside">
                <li className="tracking-wider ">유급휴가없음</li>
                <li className="tracking-wider">
                  골든위크(평일), 여름휴가, 연말연시(12/30~1/3)은 보장
                </li>
                <li className="tracking-wider">12/29특별휴가</li>
              </ul>
            </Typography>
          </div>

          <div className="py-8 ">
            <Typography className="font-bold text-xl  ">
              2. 입사6개월이상의 사원
            </Typography>
          </div>

          <Typography>
            <ul class="list-disc list-inside text-lg ml-20">
              <li className="tracking-wider">유급휴가있음</li>
              <li className="tracking-wider">
                <span className=" text-red">
                  근로일이 8할 이상인 사람이 대상
                </span>
              </li>
              <li className="tracking-wider">
                現場勤務時間：8h, 7.75h(7h45m)등 다양한 케이스가 존재
              </li>
              <li className="tracking-wider">현장 카렌다를 따름</li>
              <li className="tracking-wider">유급휴가있음</li>
              <li className="tracking-wider h-32">勤続年数</li>
            </ul>
          </Typography>

          <Table class="table-auto border-collapse border border-slate-400 w-200 border-black ml-20">
            <thead>
              <tr>
                <th class="border border-slate-300  p-7 w-1/2 bg-[#ADD8E6] border-black">
                  勤続年数
                </th>
                <th className="bg-[#9ACD32] p-7 w-1/2 border-black">
                  有給日数
                </th>
              </tr>

              <tr>
                <th class="border border-slate-300 p-7 w-1/2 bg-[#ADD8E6]  border-black">
                  0年(6ヶ月)
                </th>
                <th class="border border-slate-300 p-7 w-1/2 border-black">
                  10
                </th>
              </tr>

              <tr>
                <th class="border border-slate-300 p-7 w-1/2 bg-[#ADD8E6] border-black">
                  1年
                </th>
                <th class="border border-slate-300 p-7 w-1/2 border-black">
                  11
                </th>
              </tr>

              <tr>
                <th class="border border-slate-300  p-7 w-1/2 bg-[#ADD8E6]  border-black">
                  2年
                </th>
                <th class="border border-slate-300 p-7 w-1/2  border-black">
                  12
                </th>
              </tr>

              <tr>
                <th class="border border-slate-300 bg-[#ADD8E6]  border-black p-7 w-1/2">
                  3年
                </th>
                <th class="border border-slate-300  border-black p-7 w-1/2">
                  14
                </th>
              </tr>

              <tr>
                <th class="border border-slate-300  bg-[#ADD8E6] border-black p-7 w-1/2">
                  4年
                </th>
                <th class="border border-slate-300 border-black p-7 w-1/2">
                  16
                </th>
              </tr>

              <tr>
                <th class="border border-slate-300  bg-[#ADD8E6] border-black p-7 w-1/2">
                  5年.
                </th>
                <th class="border border-slate-300 border-black p-7 w-1/2">
                  18
                </th>
              </tr>

              <tr>
                <th class="border border-slate-300 bg-[#ADD8E6] border-black p-7 w-1/2">
                  6年
                </th>
                <th class="border border-slate-300 border-black p-7 w-1/2">
                  20
                </th>
              </tr>
            </thead>
          </Table>

          <div class="py-8">
            <Typography class="font-bold text-xl">
              3. 유급이외의 특별휴가
            </Typography>
          </div>

          <div className="py-8">
            <ul class="list-disc list-inside text-lg ml-20">
              <li className="tracking-wider">관혼상제</li>
            </ul>
          </div>

          <div className="py-8">
            <Typography class="font-bold text-xl">
              4. 골든위큰, 여름휴가때 현장이 야스미인데, 근무시간이 부족한경우
            </Typography>
          </div>

          <ul class="list-disc list-inside h-32 text-lg ml-20">
            <li className="tracking-wider">
              유급을 쓰면되는데, 본사로 출근해서 공부를 해도 괜찮다.
            </li>
          </ul>

          <div className="py-8">
            <Typography class="font-bold text-xl">
              5. 4/1일 기준 초기화
            </Typography>
          </div>

          <div className="py-8">
            <Typography class="font-bold text-xl">
              6. 勤務時間：基本150時間
            </Typography>
          </div>

          <div className="py-8">
            <Typography class="font-bold text-xl tracking-tight">
              7. 각 현장 및 본사의 휴일카렌다가 다르므로, 현장근무자는
              현장카렌다를, 본사근무자는 본사카렌다를 따르도록 한다
            </Typography>
          </div>
          <div className="py-8">
            <Typography class="font-bold text-xl">
              8. 사용하지 않은 유급휴가는 다음해로 이월된다. 단, 1년치에 한해서
            </Typography>
          </div>
        </DialogContent>

        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => dispatch(closeDialog())}
          >
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
