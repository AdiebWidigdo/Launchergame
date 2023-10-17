import { FunctionComponent } from "react";

const SetArticles: FunctionComponent = () => {
  return (
    <div className="rounded-lg bg-gray-200 box-border h-[443px] flex flex-row items-start justify-start pt-2 px-1 pb-0 gap-[8px] text-left text-3xs text-lightslategray font-baloo-2 border-[2px] border-solid border-gray-300">
      <div className="rounded-lg w-[229px] h-[431px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[8px]">
        <div className="self-stretch rounded-md [background:linear-gradient(180deg,_#5a6988,_rgba(90,_105,_136,_0))] flex flex-row items-center justify-center py-1 px-2 gap-[8px] text-sm text-white font-baloo-bhai-2">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src="/mingcuteannouncementline.svg"
          />
          <b className="relative tracking-[0.02em]">{`News & Update`}</b>
        </div>
        <div className="relative rounded-md bg-gray-100 w-56 h-48">
          <div className="absolute top-[140px] left-[9.5px] flex flex-col items-start justify-start">
            <div className="w-[204px] flex flex-row items-start justify-between">
              <div className="relative tracking-[0.02em] font-semibold">
                Game Design
              </div>
              <div className="relative font-semibold">{`2 months ago `}</div>
            </div>
            <div className="relative font-semibold text-lavender flex items-center w-[204px]">{`Forge Your Path: Smelting, Crafting, Customization & NFT Minting`}</div>
          </div>
          <img
            className="absolute top-[0px] left-[-0.5px] rounded-md w-56 h-[136px] object-cover"
            alt=""
            src="/rectangle-1016@2x.png"
          />
        </div>
        <div className="relative rounded-md bg-gray-100 w-56 h-48">
          <div className="absolute top-[140px] left-[9.5px] flex flex-col items-start justify-start">
            <div className="w-[204px] flex flex-row items-start justify-between">
              <div className="relative tracking-[0.02em] font-semibold">
                Game Design
              </div>
              <div className="relative font-semibold">{`2 months ago `}</div>
            </div>
            <div className="relative font-semibold text-lavender flex items-center w-[204px]">{`Forge Your Path: Smelting, Crafting, Customization & NFT Minting`}</div>
          </div>
          <img
            className="absolute top-[0px] left-[-0.5px] rounded-md w-56 h-[136px] object-cover"
            alt=""
            src="/rectangle-10161@2x.png"
          />
        </div>
      </div>
      <div className="rounded-md bg-gray-200 box-border w-[18px] h-[427px] flex flex-row items-start justify-center pt-0 px-0 pb-2 border-[2px] border-solid border-gray-200">
        <div className="rounded-md [background:linear-gradient(180deg,_#0099db,_#1e6dd5)] box-border w-4 flex flex-col items-start justify-start py-10 px-0.5 gap-[2px] border-[2px] border-solid border-gray-300">
          <div className="relative rounded bg-steelblue w-2 h-px" />
          <div className="relative rounded bg-steelblue w-2 h-px" />
          <div className="relative rounded bg-steelblue w-2 h-px" />
        </div>
      </div>
    </div>
  );
};

export default SetArticles;
