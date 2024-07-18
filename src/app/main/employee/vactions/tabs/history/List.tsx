export default function List() {
  return (
    <>
      <div className="flex-1 flex flex-col flex-wrap w-full max-w-screen-xl mx-auto ng-star-inserted">
        <div className="flex-1 relative">
          <div className=" ng-star-inserted">
            <div className="h-full">
              <ul className="list-inside">
                <li className="ng-star-inserted">
                  <div className="border-gray-500 bg-blue-200 border-t-2">
                    2023/02/01 ~ 2024/01/31 (1.0/14.0使用済み)
                  </div>
                  <ol>
                    <li className="flex flex-wrap justify-start items-center border-gray-500 border-y-2 ng-star-inserted">
                      <span className="inline-block align-middle w-36 text-right mr-10">
                        1
                      </span>
                      <span className="inline-block align-middle w-80">
                        2024/07/11
                      </span>
                      <span className="inline-block align-middle w-30 truncate overflow-hidden">
                        有給休暇（全休）
                      </span>
                      <span className="inline-block align-middle w-40">8h</span>
                      <span className="align-middle truncate overflow-hidden flex-1">
                        zcvz
                      </span>
                    </li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
