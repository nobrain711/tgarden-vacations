import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";

export const VacationSidebarContent: React.FC = () => {
  // 状態変数を初期化します。
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // メニューのアンカーエレメント
  const [selectedOption, setSelectedOption] = useState<string>("有給休暇（全休）"); // 選択されたオプション
  const [time, setTime] = useState<number>(8); // 時間
  const [headerText, setHeaderText] = useState<string>('休暇申請（全休）'); // // ヘッダーテキスト

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

  return (
    <div style={{ width: '480px' }}>
      {/* ヘッダーセクション */}
      <div className={`bg-indigo-500 p-16 mb-16 text-center py-68 ${headerText === '本社出社申請' ? 'bg-gray-900' : ''}`}>
        <Typography variant="h2" className="text-6xl text-white font-bold">{headerText}</Typography>
      </div>

      {/* 日付 入力 セクション */}
      <div className="p-48 -mt-32">
        <Typography variant="body1" className="text-base text-black font-bold">日付*</Typography>
        <div className="mt-2 flex items-center border border-gray-400 rounded-md p-6 h-48">
          {/* カレンダーアイコン */}
          <svg
            xmlns="http://www.w3.org/2000/svg" // SVGネームスペース
            viewBox="0 0 24 24" // SVGビューボックス設定
            fill="none" // fill なし
            stroke="currentColor" // 現在の色で線を描く
            strokeWidth="2" // 線 厚さ 2
            strokeLinecap="round" // 線の先を丸く処理
            strokeLinejoin="round" // 線の連結部分を丸く処理
            className="h-24 w-24 text-gray-400 ml-10 mr-3" // SVGアイコンのスタイルクラス
          >
            {/* カレンダー形の長方形 */}
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            {/* カレンダーの上の縦線 */}
            <line x1="16" y1="2" x2="16" y2="6"></line>
            {/* カレンダー上の他の縦線 */}
            <line x1="8" y1="2" x2="8" y2="6"></line>
            {/* カレンダーの下の横線 */}
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {/* 入力フィールド */}
          <input
            type="text" // テキスト入力タイプ
            className="w-full outline-none px-4 py-8"
            placeholder="" // プレースホルダーテキスト
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
          className="text-base bg-gray-200 text-gray-600 font-bold rounded-full w-full mx-44 -mt-16" // ボタンスタイルの設定
          onClick={() => alert("Button clicked!")} // クリック時に警告ウィンドウを表示する関数呼び出し
        >
          申請 {/* 「申請」テキスト */}
        </Button>
      </div>
    </div>
  );
}