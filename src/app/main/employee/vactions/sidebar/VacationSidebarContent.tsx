import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem, Typography, TextField, Box } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export const VacationSidebarContent: React.FC = () => {
  // 状態変数を初期化します。
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // メニューのアンカーエレメント
  const [selectedOption, setSelectedOption] = useState<string>("有給休暇（全休）"); // 選択されたオプション
  const [time, setTime] = useState<number>(8); // 時間
  const [headerText, setHeaderText] = useState<string>('休暇申請（全休）'); // // ヘッダーテキスト
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false); // 入力フィールドにフォーカスがあるかどうかを示すステータス変数です。
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // 選択された日付状態変数
  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false); //DatePickerアクセスするかどうかを管理する状態変数

  // 選択したオプションが変更されるたびに実行される効果
  useEffect(() => {
    if (selectedOption === "有給休暇（全休）") {
      setTime(8); // 時間を8時間に設定
      setHeaderText('休暇申請（全休）'); // ヘッダーテキスト設定
    } else if (selectedOption === "有給休暇（半休）") {
      setTime(4); // 時間を4時間に設定
      setHeaderText('休暇申請（半休）'); // ヘッダーテキスト設定
    } else if (selectedOption === "本社出勤") {
      setTime(8); // 時間を8時間に設定
      setHeaderText('本社出社申請'); // ヘッダーテキスト設定
    }
  }, [selectedOption]);

  // クリックイベントハンドラ
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget); // アンカーエレメントをクリックした要素に設定
    setIsClicked(true); // クリックするとステータス変数を変更
  };

  // メニューを閉じる関数
  const handleClose = () => {
    setAnchorEl(null); // アンカーエレメントをnullに設定してメニューを閉じる
  };

  // オプションを選択するときに実行される関数
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option); // 選択したオプションを設定
    handleClose(); // メニューを閉じる
  };

  // 入力フィールドにフォーカスが入るときに実行される関数です。
  const handleInputFocus = () => {
    setIsInputFocused(true); // isInputFocused状態をtrueに設定し、入力フィールドにフォーカスが入ったことを示します。
  };

  // 入力フィールドからフォーカスが外れたときに実行される関数です。
  const handleInputBlur = () => {
    setIsInputFocused(false); // isInputFocused状態をfalseに設定し、入力フィールドからフォーカスが外れたことを示します。
  };

  const handleDatePickerOpen = () => {
    setOpenDatePicker(true);
  };

  const handleDatePickerClose = () => {
    setOpenDatePicker(false);
  };

    // 今日の日取り計算
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 今日の日付の時間を00:00:00に設定
  
    // DatePickerで使用する最小日付設定
    const minDate = today;
  
    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 基本提出動作防止
    alert("페이지가 제출되었습니다!"); // ページ提出メッセージの表示または提出ロジックの追加
    // 追加でページ切り替えなどの動作が可能
  };

  return (
    <div style={{ width: '480px' }}>
      {/* ヘッダーセクション */}
      <div className={`bg-indigo-500 p-16 mb-16 text-center py-68 ${headerText === '本社出社申請' ? 'bg-gray-900' : ''}`}>
        <Typography variant="h2" className="text-6xl text-white font-bold">{headerText}</Typography>
      </div>

      {/* 日付 入力 セクション */}
      <div className="p-48 -mt-32">
        <Typography variant="body1" className="text-base text-black font-bold">日付*</Typography>
        <div className={`mt-2 flex items-center border ${isInputFocused ? 'border-blue-500' : 'border-gray-400'} rounded-md p-8 h-48`} style={{ position: "relative" }}>
          {/* 달력 아이콘 */}
          <Box
            sx={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              zIndex: 1, // この値を設定して、アイコンが他の要素の上に表示されるようにする
            }}
            onClick={handleDatePickerOpen}
          >
            <CalendarTodayIcon />
          </Box>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={minDate}
            dateFormat="yyyy-MM-dd"
            popperPlacement="bottom-start"
            open={openDatePicker} // DatePickerの開き状態を設定
            onClickOutside={handleDatePickerClose} // DatePicker外部クリック時に閉じるように設定
            renderInput={() => null}
            className="w-full pl-36" // 入力フィールドの左側の余白を与え、アイコンと重ならないようにする
          />
        </div>
        <Typography variant="body2" className="text-xs font-bold text-gray-500 mt-4">YYYY-MM-DD</Typography>
      </div>

      {/* 区分選択セクション */}
      <div className="p-48 -mt-60">
        <Typography variant="body1" className="text-base text-black font-bold">区分*</Typography>
        <div
          className="border border-gray-400 p-8 mt-6 h-48 rounded-md flex items-center" // 枠とスタイリング設定
          id="selectionBox" // 選択ボックスのID
          onClick={handleClick} // クリックするとhandleClick関数呼び出し
          style={{ cursor: "pointer" }} // マウス カーソルをポインタに変更してクリック可能性を示す
        >
          <Typography variant="body1" className="font-medium pl-6">{selectedOption}</Typography>
        </div>
        {/* オプションメニュー */}
        <Menu
          anchorEl={anchorEl} // メニューが開く目安となるエレメント
          open={Boolean(anchorEl)} // メニューが開いた状態かどうかをBoolean値に設定
          onClose={handleClose} // メニューを閉じるときに呼び出される関数
          anchorOrigin={{ // メニューの基準位置設定
            vertical: "bottom", // 縦方向位置: 下の方
            horizontal: "left", // 横方向位置:左
          }}
          transformOrigin={{ // メニューが表示される位置設定
            vertical: "top", // 縦方向位置: 上
            horizontal: "left", // 横方向位置:左
          }}
        >
          <MenuItem onClick={() => handleOptionSelect("有給休暇（全休）")}>
            {/* 全有給休暇選択 */}
            有給休暇（全休）
          </MenuItem>
          <MenuItem onClick={() => handleOptionSelect("有給休暇（半休）")}>
            {/* 反日有給休暇選択 */}
            有給休暇（半休）
          </MenuItem>
          <MenuItem onClick={() => handleOptionSelect("本社出勤")}>
            {/* 本社出勤選択 */}
            本社出勤
          </MenuItem>
        </Menu>
      </div>

      {/* 時間表示セクション */}
      <div className="p-48 -mt-60">
        <Typography variant="body1" className="text-base text-black font-bold">時間</Typography> {/* 時間 */}
        <Typography variant="body1" className="ml-6">{time}</Typography> {/* 実時間値出力 */}
      </div>

      {/* 休暇理由入力セクション */}
      <div className="p-48 -mt-60">
        <Typography variant="body1" className="text-base text-black font-bold">休暇事由 / 備考</Typography>
        <textarea
          className="w-full min-h-52 px-4 py-16 text-sm border border-gray-400 rounded"
          placeholder="" // プレースホルダーテキスト
        />
      </div>

      {/* 申し込みボタン */}
      <div className="flex justify-center">
        <Button
          type="submit" // ボタンがフォームを提出するように設定
          className="text-base bg-gray-200 text-gray-600 font-bold rounded-full w-full mx-44 -mt-16"
          onClick={handleSubmit}
        >
          申請 {/* 「申請」テキスト */}
        </Button>
      </div>
    </div>
  );
}