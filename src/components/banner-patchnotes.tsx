import { FunctionComponent } from "react";

const BannerPatchnotes: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-xs text-white font-baloo-bhai-2">
      <img
        className="relative rounded-lg w-[488px] h-40 object-cover"
        alt=""
        src="/banner-1@2x.png"
      />
      <div className="rounded-md bg-gray-100 w-[487px] h-6 flex flex-row items-center justify-start py-0 px-4 box-border gap-[8px]">
        <img
          className="relative w-[18px] h-[17px] overflow-hidden shrink-0 hidden"
          alt=""
          src="/fontistoradiobtnactive.svg"
        />
        <b className="self-stretch flex-1 relative tracking-[0.02em] flex items-center">{`Follow Our Social Media `}</b>
        <div className="flex flex-row items-start justify-start gap-[5px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5 overflow-hidden shrink-0">
            <img
              className="absolute h-[56.47%] w-[68.46%] top-[22.5%] right-[21.55%] bottom-[21.03%] left-[10%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/telegram.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5 overflow-hidden shrink-0">
            <img
              className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_6.88px)] w-[13.33px] h-[9.15px]"
              alt=""
              src="/vector.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5">
            <img
              className="absolute h-[54.55%] w-3/5 top-[25%] right-[17.5%] bottom-[20.45%] left-[22.5%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-3645.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5 overflow-hidden shrink-0">
            <img
              className="absolute h-[59.38%] w-[66.64%] top-[19.79%] right-[16.67%] bottom-[20.83%] left-[16.69%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5 overflow-hidden shrink-0">
            <img
              className="absolute h-3/6 w-[62.5%] top-[25%] right-[20.01%] bottom-[25%] left-[17.49%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector2.svg"
            />
          </button>
        </div>
        <div className="relative tracking-[0.02em] font-semibold text-lightslategray text-right hidden">
          Monday, 12 August 2023
        </div>
      </div>
      <div className="flex-1 rounded-md bg-gray-100 w-[487px] overflow-hidden flex flex-row items-start justify-start pt-3 px-3 pb-0 box-border text-sm">
        <div className="w-[475px] h-[227px] flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[456px] flex flex-row items-center justify-start gap-[8px]">
              <b className="flex-1 relative tracking-[0.02em]">{`Patch Notes 1.00.92 `}</b>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[15px] h-[15px] overflow-hidden shrink-0">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector3.svg"
                  />
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[15px] h-[15px] overflow-hidden shrink-0">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector4.svg"
                  />
                </button>
              </div>
            </div>
            <div className="relative text-3xs tracking-[0.02em] font-semibold font-baloo-2 text-lightslategray inline-block w-[334px]">
              New Game Mode: Capture Flag! - Experimenting with 254p, also
              playable on 128p and 64p series.
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[4px] text-3xs text-lightslategray font-baloo-2">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="relative rounded-[50%] bg-lightslategray w-1 h-1" />
              <div className="relative leading-[150%] font-medium flex items-end w-[441px] h-[26px] shrink-0">
                Capture the flag, if flag is carried over to any safe zone, main
                base etc, iw will be auto teklleported back to flag’s spawn to
                prevent someone keeping flag in safe zone.
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative rounded-[50%] bg-lightslategray w-1 h-1" />
              <div className="relative leading-[150%] font-medium">
                UI Improvements for Capture The Flag.
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative rounded-[50%] bg-lightslategray w-1 h-1" />
              <div className="relative leading-[150%] font-medium">
                The spectator mode has been further improved.
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative rounded-[50%] bg-lightslategray w-1 h-1" />
              <div className="relative leading-[150%] font-medium">
                Player lag has been improved during rope climbing.
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="relative rounded-[50%] bg-lightslategray w-1 h-1" />
              <div className="relative leading-[150%] font-medium flex items-end w-[441px] h-[26px] shrink-0">
                Capture the flag, if flag is carried over to any safe zone, main
                base etc, iw will be auto teklleported back to flag’s spawn to
                prevent someone keeping flag in safe zone.
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative rounded-[50%] bg-lightslategray w-1 h-1" />
              <div className="relative leading-[150%] font-medium">
                UI Improvements for Capture The Flag.
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative rounded-[50%] bg-lightslategray w-1 h-1" />
              <div className="relative leading-[150%] font-medium">
                The spectator mode has been further improved.
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative rounded-[50%] bg-lightslategray w-1 h-1" />
              <div className="relative leading-[150%] font-medium">
                Player lag has been improved during rope climbing.
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="relative rounded-[50%] bg-lightslategray w-1 h-1" />
              <div className="relative leading-[150%] font-medium flex items-end w-[441px] h-[26px] shrink-0">
                Capture the flag, if flag is carried over to any safe zone, main
                base etc, iw will be auto teklleported back to flag’s spawn to
                prevent someone keeping flag in safe zone.
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative rounded-[50%] bg-lightslategray w-1 h-1" />
              <div className="relative leading-[150%] font-medium">
                UI Improvements for Capture The Flag.
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative rounded-[50%] bg-lightslategray w-1 h-1" />
              <div className="relative leading-[150%] font-medium">
                The spectator mode has been further improved.
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative rounded-[50%] bg-lightslategray w-1 h-1" />
              <div className="relative leading-[150%] font-medium">
                Player lag has been improved during rope climbing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPatchnotes;
