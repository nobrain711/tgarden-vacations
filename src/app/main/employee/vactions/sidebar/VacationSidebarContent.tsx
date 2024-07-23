import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

export const VacationSidebarContent: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState<string>("有給休暇（全休）");
  const [time, setTime] = useState<number>(8);
  const [headerText, setHeaderText] = useState<string>('休暇申請（全休）');

  useEffect(() => {
    if (selectedOption === "有給休暇（全休）") {
      setTime(8);
      setHeaderText('休暇申請（全休）');
    } else if (selectedOption === "有給休暇（半休）") {
      setTime(4);
      setHeaderText('休暇申請（半休）');
    } else if (selectedOption === "本社出勤") {
      setTime(8);
      setHeaderText('本社出社申請');
    }
  }, [selectedOption]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setIsClicked(true); // 클릭 시 상태 변수 변경
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    handleClose();
  };

  return (
    <div style={{ width: '480px' }}>
      <div className={`bg-indigo-500 p-16 mb-16 text-center py-68 ${headerText === '本社出社申請' ? 'bg-gray-900' : ''}`}>
      <h2 className="text-6xl text-white font-bold">{headerText}</h2>
        </div>

        <div className="p-48 -mt-32">
          <p className="text-base text-black font-bold">日付*</p>
          <div className="mt-2 flex items-center border border-gray-400 rounded-md p-6 h-48">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-24 w-24 text-gray-400 ml-10 mr-3"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <input
              type="text"
              className="w-full outline-none px-4 py-8"
              placeholder=""
            />
          </div>
          <p className="text-xs font-bold text-gray-500 mt-4">YYYY-MM-DD</p>
        </div>

        <div className="p-48 -mt-60">
          <p className="text-base text-black font-bold">区分*</p>
          <div
            className="border border-gray-400 p-8 mt-6 h-48 rounded-md flex items-center"
            id="selectionBox"
            onClick={handleClick}
            style={{ cursor: "pointer" }} // 마우스를 가져갈 때 손바닥 아이콘 설정
          >
            <span className="font-medium pl-6">{selectedOption}</span>
          </div>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={() => handleOptionSelect("有給休暇（全休）")}>
              有給休暇（全休）
            </MenuItem>
            <MenuItem onClick={() => handleOptionSelect("有給休暇（半休）")}>
              有給休暇（半休）
            </MenuItem>
            <MenuItem onClick={() => handleOptionSelect("本社出勤")}>
              本社出勤
            </MenuItem>
          </Menu>
        </div>

        <div className="p-48 -mt-60">
          <p className="text-base text-black font-bold">時間</p>
          <p className="ml-6">{time}</p>
        </div>

        <div className="p-48 -mt-60">
          <p className="text-base text-black font-bold">休暇事由 / 備考</p>
          <textarea
            className="w-full min-h-52 px-4 py-16 text-sm border border-gray-400 rounded"
            placeholder=""
          />
        </div>

        <div className="flex justify-center">
          <Button
            className="text-base bg-gray-200 text-gray-600 font-bold rounded-full w-full mx-44 -mt-16"
            onClick={() => alert("Button clicked!")}
          >
            申請
          </Button>
        </div>
    </div>
  );
}