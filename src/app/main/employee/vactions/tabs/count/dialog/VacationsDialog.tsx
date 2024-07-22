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
          {" "}
          <h2 id="%EC%9C%A0%EA%B8%89%ED%9C%B4%EA%B0%80%EC%A0%9C%EB%8F%84%EA%B0%9C%EC%9A%94-new">
            유급휴가제도개요 (NEW)
          </h2>
          <h4 id="1-%EC%9E%85%EC%82%AC6%EA%B0%9C%EC%9B%94%EB%AF%B8%EB%A7%8C%EC%9D%98-%EC%82%AC%EC%9B%90">
            1. 입사6개월미만의 사원
          </h4>
          <ul>
            <li>유급휴가없음</li>
            <li>
              골든위크(평일), 여름휴가, 연말연시(12/30~1/3)는 보장
              <ul>
                <li>12/29특별휴가</li>
              </ul>
            </li>
          </ul>
          <h4 id="2-%EC%9E%85%EC%82%AC6%EA%B0%9C%EC%9B%94%EC%9D%B4%EC%83%81%EC%9D%98-%EC%82%AC%EC%9B%90">
            2. 입사6개월이상의 사원
          </h4>
          <ul>
            <li>유급휴가있음</li>
            <li>
              <span>근로일이 8할 이상인 사람이 대상</span>
            </li>
            <li>現場勤務時間：8h, 7.75h(7h 45m) 등 다양한 케이스가 존재</li>
            <li>현장 카렌다를 따름.</li>
            <li>
              勤続年数
              <table>
                <thead>
                  <tr>
                    <th>勤続年数</th>
                    <th>有給日数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>0年(6ヶ月～)</strong>
                    </td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>1年</strong>
                    </td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>2年</strong>
                    </td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>3年</strong>
                    </td>
                    <td>14</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>4年</strong>
                    </td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>5年</strong>
                    </td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>6年</strong>
                    </td>
                    <td>20</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
          <h4 id="3-%EC%9C%A0%EA%B8%89%EC%9D%B4%EC%99%B8%EC%9D%98-%ED%8A%B9%EB%B3%84%ED%9C%B4%EA%B0%80">
            3. 유급이외의 특별휴가
          </h4>
          <ul>
            <li>관혼상제</li>
          </ul>
          <h4 id="4-%EA%B3%A8%EB%93%A0%EC%9C%84%ED%81%B0-%EC%97%AC%EB%A6%84%ED%9C%B4%EA%B0%80%EB%95%8C-%ED%98%84%EC%9E%A5%EC%9D%B4-%EC%95%BC%EC%8A%A4%EB%AF%B8%EC%9D%B8%EB%8D%B0-%EA%B7%BC%EB%AC%B4%EC%8B%9C%EA%B0%84%EC%9D%B4-%EB%B6%80%EC%A1%B1%ED%95%9C%EA%B2%BD%EC%9A%B0">
            4. 골든위큰, 여름휴가때 현장이 야스미인데, 근무시간이 부족한경우
          </h4>
          <ul>
            <li>유급을 쓰면되는데, 본사로 출근해서 공부를 해도 괜찮다.</li>
          </ul>
          <h4 id="5-41%EC%9D%BC-%EA%B8%B0%EC%A4%80-%EC%B4%88%EA%B8%B0%ED%99%94">
            5. 4/1일 기준 초기화
          </h4>
          <h4 id="6-%E5%8B%A4%E5%8B%99%E6%99%82%E9%96%93%E5%9F%BA%E6%9C%AC150%E6%99%82%E9%96%93">
            6. 勤務時間：基本150時間
          </h4>
          <h4 id="7-%EA%B0%81-%ED%98%84%EC%9E%A5-%EB%B0%8F-%EB%B3%B8%EC%82%AC%EC%9D%98-%ED%9C%B4%EC%9D%BC%EC%B9%B4%EB%A0%8C%EB%8B%A4%EA%B0%80-%EB%8B%A4%EB%A5%B4%EB%AF%80%EB%A1%9C-%ED%98%84%EC%9E%A5%EA%B7%BC%EB%AC%B4%EC%9E%90%EB%8A%94-%ED%98%84%EC%9E%A5%EC%B9%B4%EB%A0%8C%EB%8B%A4%EB%A5%BC-%EB%B3%B8%EC%82%AC%EA%B7%BC%EB%AC%B4%EC%9E%90%EB%8A%94-%EB%B3%B8%EC%82%AC%EC%B9%B4%EB%A0%8C%EB%8B%A4%EB%A5%BC-%EB%94%B0%EB%A5%B4%EB%8F%84%EB%A1%9D-%ED%95%9C%EB%8B%A4">
            7. 각 현장 및 본사의 휴일카렌다가 다르므로, 현장근무자는
            현장카렌다를, 본사근무자는 본사카렌다를 따르도록 한다.
          </h4>
          <h4 id="8-%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80-%EC%95%8A%EC%9D%80-%EC%9C%A0%EA%B8%89%ED%9C%B4%EA%B0%80%EB%8A%94-%EB%8B%A4%EC%9D%8C%ED%95%B4%EB%A1%9C-%EC%9D%B4%EC%9B%94%EB%90%9C%EB%8B%A4-%EB%8B%A8-1%EB%85%84%EC%B9%98%EC%97%90-%ED%95%9C%ED%95%B4%EC%84%9C">
            8. 사용하지 않은 유급휴가는 다음해로 이월된다. 단, 1년치에 한해서
          </h4>
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
