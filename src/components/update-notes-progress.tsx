import { FunctionComponent } from "react";

const UpdateNotesProgress: FunctionComponent = () => {
  return (
    <div className="w-[541px] flex flex-col items-start justify-start gap-[7px] text-left text-base text-white font-baloo-bhai-2">
      <div className="self-stretch rounded-lg bg-gray-300 flex flex-col items-start justify-start py-2 px-4 gap-[2px]">
        <b className="relative tracking-[0.02em]">Update Notes</b>
        <div className="self-stretch flex flex-row items-start justify-between text-xs text-lavender font-baloo-2">
          <div className="flex-1 flex flex-row items-start justify-start">
            <div className="relative font-semibold">{`Downloaded New updates 1.00.92 `}</div>
          </div>
          <div className="relative font-semibold">Completed!</div>
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-gray-300 h-6 flex flex-col items-start justify-center text-center text-sm font-baloo-2">
        <div className="self-stretch rounded-lg [background:linear-gradient(180deg,_#3e8948,_#265c42)] box-border h-6 overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-48 border-[2px] border-solid border-gray-300">
          <b className="flex-1 relative">100%</b>
        </div>
      </div>
    </div>
  );
};

export default UpdateNotesProgress;
