import React from "react";

// 더미 데이터 생성
const dummyData = [
  { id: 1, date: "2024/07/18", type: "유급휴가", hours: "8h", remarks: "zxcv" },
  { id: 2, date: "2024/07/19", type: "반차", hours: "4h", remarks: "abc" },
  { id: 3, date: "2024/07/20", type: "본사출근", hours: "8h", remarks: "def" },
];

export default function List() {
  return (
    <>
      <div className="flex-1 flex flex-col w-full max-w-screen-xl mx-auto">
        <div className="flex-1 relative">
          <div className="h-full">
            <ul className="list-inside">
              <li>
                <div className="border-gray-500 bg-blue-200 border-t-2 py-2 px-4">
                  2023/02/01 ~ 2024/01/31 (1.0/14.0使用済み)
                </div>
                <div className="grid grid-cols-[3rem,6rem,10rem,4rem,1fr] gap-4 border-gray-500 border-y-2">
                  {dummyData.map((item) => (
                    <React.Fragment key={item.id}>
                      <div className="flex items-center justify-center">
                        {item.id}
                      </div>
                      <div className="flex items-center justify-center">
                        {item.date}
                      </div>
                      <div className="flex items-center justify-center">
                        {item.type}
                      </div>
                      <div className="flex items-center justify-center">
                        {item.hours}
                      </div>
                      <div className="flex items-center">{item.remarks}</div>
                    </React.Fragment>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
