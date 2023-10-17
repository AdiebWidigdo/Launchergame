import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PatchNotesUpdatingScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative w-full h-[813px] overflow-hidden bg-[url('/public/patchnotesupdatingfinish@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-3xs text-lightslategray font-baloo-2">
      <div className="absolute top-[calc(50%_-_299.5px)] left-[calc(50%_-_400px)] rounded-2xl [background:linear-gradient(180deg,_#262b44,_#3a4466)] w-[800px] h-[600px] flex flex-col items-center justify-start p-4 box-border gap-[8px] mix-blend-normal">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="rounded-lg bg-gray-200 box-border h-[443px] flex flex-row items-start justify-start pt-2 px-1 pb-0 gap-[8px] border-[2px] border-solid border-gray-300">
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
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xs text-white font-baloo-bhai-2">
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
                      Capture the flag, if flag is carried over to any safe
                      zone, main base etc, iw will be auto teklleported back to
                      flag’s spawn to prevent someone keeping flag in safe zone.
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
                      Capture the flag, if flag is carried over to any safe
                      zone, main base etc, iw will be auto teklleported back to
                      flag’s spawn to prevent someone keeping flag in safe zone.
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
                      Capture the flag, if flag is carried over to any safe
                      zone, main base etc, iw will be auto teklleported back to
                      flag’s spawn to prevent someone keeping flag in safe zone.
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
            <div className="flex-1 rounded-md bg-gray-100 w-[487px] overflow-hidden hidden flex-row items-start justify-start pt-3 px-3 pb-0 box-border text-sm">
              <div className="w-[475px] h-[227px] flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-col items-start justify-start">
                  <b className="self-stretch relative tracking-[0.02em]">{`Patch Notes 1.00.92 `}</b>
                  <div className="self-stretch relative text-3xs tracking-[0.02em] font-semibold font-baloo-2 text-lightslategray">
                    New Game Mode: Capture Flag! - Experimenting with 254p, also
                    playable on 128p and 64p series.
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px] text-3xs text-lightslategray font-baloo-2">
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="relative rounded-[50%] bg-lightslategray w-1 h-1" />
                    <div className="relative leading-[150%] font-medium flex items-end w-[441px] h-[26px] shrink-0">
                      Capture the flag, if flag is carried over to any safe
                      zone, main base etc, iw will be auto teklleported back to
                      flag’s spawn to prevent someone keeping flag in safe zone.
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
                      Capture the flag, if flag is carried over to any safe
                      zone, main base etc, iw will be auto teklleported back to
                      flag’s spawn to prevent someone keeping flag in safe zone.
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
                      Capture the flag, if flag is carried over to any safe
                      zone, main base etc, iw will be auto teklleported back to
                      flag’s spawn to prevent someone keeping flag in safe zone.
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
            <div className="rounded-md bg-gray-100 w-[487px] h-[23px] hidden flex-row items-center justify-start py-0 px-4 box-border gap-[8px]">
              <img
                className="relative w-[18px] h-[17px] overflow-hidden shrink-0"
                alt=""
                src="/fontistoradiobtnactive1.svg"
              />
              <b className="self-stretch flex-1 relative tracking-[0.02em] flex items-center">
                Last Played
              </b>
              <div className="relative tracking-[0.02em] font-semibold text-lightslategray text-right">
                Monday, 12 August 2023
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[11px] text-base text-white font-baloo-bhai-2">
          <div className="w-[541px] flex flex-col items-start justify-start gap-[7px]">
            <div className="self-stretch rounded-lg bg-gray-300 flex flex-col items-start justify-start py-2 px-4 gap-[2px]">
              <b className="relative tracking-[0.02em]">Update Notes</b>
              <div className="self-stretch flex flex-row items-start justify-between text-xs text-lavender font-baloo-2">
                <div className="flex-1 flex flex-row items-start justify-start gap-[3px]">
                  <div className="relative font-semibold">
                    downloading New updates 1.00.92 (1.6 GB)
                  </div>
                  <div className="relative font-semibold">1.2 MB/s</div>
                  <div className="relative font-semibold">
                    ( 1.2 GB / 1.6 GB)
                  </div>
                </div>
                <div className="relative font-semibold">
                  Time Remaining: 88:88:88
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-gray-300 h-6 flex flex-col items-start justify-center text-sm font-baloo-2">
              <div className="rounded-lg [background:linear-gradient(180deg,_#3e8948,_#265c42)] box-border w-[412px] h-6 overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-48 border-[2px] border-solid border-gray-300">
                <b className="flex-1 relative">80%</b>
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer p-4 bg-[transparent] flex-1 rounded-3xs [background:linear-gradient(180deg,_#8b9bb4,_#5a6988)] box-border h-[110px] flex flex-row items-center justify-center border-[2px] border-solid border-gray-300"
            onClick={onButtonClick}
          >
            <b className="relative text-5xl tracking-[0.02em] leading-[120%] font-baloo-bhai-2 text-white text-center">
              Updating
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatchNotesUpdatingScreen;
