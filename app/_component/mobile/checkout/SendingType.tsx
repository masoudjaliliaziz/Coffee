import { BackwardIcon, TruckIcon } from "@heroicons/react/16/solid";

function SendingType() {
  return (
    <div className="w-full h-2/12 px-6  flex flex-col">
      <div className="h-3/4 w-full bg-white rounded-2xl flex ">
        <div className="flex w-5/6 h-full justify-between items-center px-3  gap-3 ">
          <div className="w-[60px] h-[60px] rounded-full bg-base-200 flex justify-center items-center">
            <TruckIcon width={35} />
          </div>
          <div className="flex flex-col h-full  w-5/6 justify-center ">
            <h1 className="text-2xl font-black">انتخاب نوع ارسال</h1>
          </div>
        </div>
        <div className="w-1/6 h-full  flex justify-center items-center">
          <BackwardIcon width={32} />
        </div>
      </div>
    </div>
  );
}

export default SendingType;
