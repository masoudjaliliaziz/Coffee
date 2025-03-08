import { MapPinIcon, PencilSquareIcon } from "@heroicons/react/16/solid";

function AdderssCheckout() {
  return (
    <div className="w-full h-2/12 px-6  flex flex-col">
      <div className="h-1/4 w-full font-bold text-lg">آدرس های شما</div>
      <div className="h-3/4 w-full bg-white rounded-2xl flex ">
        <div className="flex w-5/6 h-full justify-between items-center px-3  gap-3 ">
          <div className="w-[60px] h-[60px] rounded-full bg-base-200 flex justify-center items-center">
            <MapPinIcon width={50} />
          </div>
          <div className="flex flex-col h-full  w-5/6 justify-center ">
            <h1 className="text-2xl font-black">خانه</h1>
            <p className="text-sm font-semibold text-slate-400">
              همدان ، رزن ، شهرک جانبازان
            </p>
          </div>
        </div>
        <div className="w-1/6 h-full  flex justify-center items-center">
          <PencilSquareIcon width={32} />
        </div>
      </div>
    </div>
  );
}

export default AdderssCheckout;
