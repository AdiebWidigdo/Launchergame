import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PatchNotesPreparingScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/patchnotesupdatingscreen");
  }, [navigate]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "813px",
        overflow: "hidden",
        backgroundImage: "url('/patchnotesupdatingfinish@3x.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        textAlign: "left",
        fontSize: "10px",
        color: "#8b9bb4",
        fontFamily: "'Baloo 2'",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "calc(50% - 299.5px)",
          left: "calc(50% - 400px)",
          borderRadius: "16px",
          background: "linear-gradient(180deg, #262b44, #3a4466)",
          width: "800px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "16px",
          boxSizing: "border-box",
          gap: "8px",
          mixBlendMode: "normal",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              border: "2px solid rgba(0, 0, 0, 0.2)",
              boxSizing: "border-box",
              height: "443px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "8px 4px 0px",
              gap: "8px",
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                width: "229px",
                height: "431px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  borderRadius: "6px",
                  background:
                    "linear-gradient(180deg, #5a6988, rgba(90, 105, 136, 0))",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px 8px",
                  gap: "8px",
                  fontSize: "14px",
                  color: "#fff",
                  fontFamily: "'Baloo Bhai 2'",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/mingcuteannouncementline.svg"
                />
                <b
                  style={{ position: "relative", letterSpacing: "0.02em" }}
                >{`News & Update`}</b>
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "6px",
                  backgroundColor: "#22283b",
                  width: "224px",
                  height: "192px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "140px",
                    left: "9.5px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "204px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        letterSpacing: "0.02em",
                        fontWeight: "600",
                      }}
                    >
                      Game Design
                    </div>
                    <div
                      style={{ position: "relative", fontWeight: "600" }}
                    >{`2 months ago `}</div>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      fontWeight: "600",
                      color: "#cadbf5",
                      display: "flex",
                      alignItems: "center",
                      width: "204px",
                    }}
                  >{`Forge Your Path: Smelting, Crafting, Customization & NFT Minting`}</div>
                </div>
                <img
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "-0.5px",
                    borderRadius: "6px",
                    width: "224px",
                    height: "136px",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/rectangle-1016@2x.png"
                />
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "6px",
                  backgroundColor: "#22283b",
                  width: "224px",
                  height: "192px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "140px",
                    left: "9.5px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "204px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        letterSpacing: "0.02em",
                        fontWeight: "600",
                      }}
                    >
                      Game Design
                    </div>
                    <div
                      style={{ position: "relative", fontWeight: "600" }}
                    >{`2 months ago `}</div>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      fontWeight: "600",
                      color: "#cadbf5",
                      display: "flex",
                      alignItems: "center",
                      width: "204px",
                    }}
                  >{`Forge Your Path: Smelting, Crafting, Customization & NFT Minting`}</div>
                </div>
                <img
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "-0.5px",
                    borderRadius: "6px",
                    width: "224px",
                    height: "136px",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/rectangle-10161@2x.png"
                />
              </div>
            </div>
            <div
              style={{
                borderRadius: "6px",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                border: "2px solid rgba(0, 0, 0, 0.1)",
                boxSizing: "border-box",
                width: "18px",
                height: "427px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "0px 0px 8px",
              }}
            >
              <div
                style={{
                  borderRadius: "6px",
                  background: "linear-gradient(180deg, #0099db, #1e6dd5)",
                  border: "2px solid rgba(0, 0, 0, 0.2)",
                  boxSizing: "border-box",
                  width: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "40px 2px",
                  gap: "2px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    borderRadius: "4px",
                    backgroundColor: "#0571ad",
                    width: "8px",
                    height: "1px",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    borderRadius: "4px",
                    backgroundColor: "#0571ad",
                    width: "8px",
                    height: "1px",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    borderRadius: "4px",
                    backgroundColor: "#0571ad",
                    width: "8px",
                    height: "1px",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
              fontSize: "12px",
              color: "#fff",
              fontFamily: "'Baloo Bhai 2'",
            }}
          >
            <img
              style={{
                position: "relative",
                borderRadius: "8px",
                width: "488px",
                height: "160px",
                objectFit: "cover",
              }}
              alt=""
              src="/banner-1@2x.png"
            />
            <div
              style={{
                borderRadius: "6px",
                backgroundColor: "#22283b",
                width: "487px",
                height: "24px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "0px 16px",
                boxSizing: "border-box",
                gap: "8px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  width: "18px",
                  height: "17px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "none",
                }}
                alt=""
                src="/fontistoradiobtnactive.svg"
              />
              <b
                style={{
                  alignSelf: "stretch",
                  flex: "1",
                  position: "relative",
                  letterSpacing: "0.02em",
                  display: "flex",
                  alignItems: "center",
                }}
              >{`Follow Our Social Media `}</b>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "5px",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "0",
                    backgroundColor: "transparent",
                    position: "relative",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      height: "56.47%",
                      width: "68.46%",
                      top: "22.5%",
                      right: "21.55%",
                      bottom: "21.03%",
                      left: "10%",
                      maxWidth: "100%",
                      overflow: "hidden",
                      maxHeight: "100%",
                    }}
                    alt=""
                    src="/telegram.svg"
                  />
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "0",
                    backgroundColor: "transparent",
                    position: "relative",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      top: "calc(50% - 4px)",
                      left: "calc(50% - 6.88px)",
                      width: "13.33px",
                      height: "9.15px",
                    }}
                    alt=""
                    src="/vector.svg"
                  />
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "0",
                    backgroundColor: "transparent",
                    position: "relative",
                    width: "20px",
                    height: "20px",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      height: "54.55%",
                      width: "60%",
                      top: "25%",
                      right: "17.5%",
                      bottom: "20.45%",
                      left: "22.5%",
                      maxWidth: "100%",
                      overflow: "hidden",
                      maxHeight: "100%",
                    }}
                    alt=""
                    src="/group-3645.svg"
                  />
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "0",
                    backgroundColor: "transparent",
                    position: "relative",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      height: "59.38%",
                      width: "66.64%",
                      top: "19.79%",
                      right: "16.67%",
                      bottom: "20.83%",
                      left: "16.69%",
                      maxWidth: "100%",
                      overflow: "hidden",
                      maxHeight: "100%",
                    }}
                    alt=""
                    src="/vector1.svg"
                  />
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "0",
                    backgroundColor: "transparent",
                    position: "relative",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      height: "50%",
                      width: "62.5%",
                      top: "25%",
                      right: "20.01%",
                      bottom: "25%",
                      left: "17.49%",
                      maxWidth: "100%",
                      overflow: "hidden",
                      maxHeight: "100%",
                    }}
                    alt=""
                    src="/vector2.svg"
                  />
                </button>
              </div>
              <div
                style={{
                  position: "relative",
                  letterSpacing: "0.02em",
                  fontWeight: "600",
                  color: "#8b9bb4",
                  textAlign: "right",
                  display: "none",
                }}
              >
                Monday, 12 August 2023
              </div>
            </div>
            <div
              style={{
                flex: "1",
                borderRadius: "6px",
                backgroundColor: "#22283b",
                width: "487px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "12px 12px 0px",
                boxSizing: "border-box",
                fontSize: "14px",
              }}
            >
              <div
                style={{
                  width: "475px",
                  height: "227px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "456px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <b
                      style={{
                        flex: "1",
                        position: "relative",
                        letterSpacing: "0.02em",
                      }}
                    >{`Patch Notes 1.00.92 `}</b>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "4px",
                      }}
                    >
                      <button
                        style={{
                          cursor: "pointer",
                          border: "none",
                          padding: "0",
                          backgroundColor: "transparent",
                          position: "relative",
                          width: "15px",
                          height: "15px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                      >
                        <img
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            top: "0%",
                            right: "0%",
                            bottom: "0%",
                            left: "0%",
                            maxWidth: "100%",
                            overflow: "hidden",
                            maxHeight: "100%",
                          }}
                          alt=""
                          src="/vector3.svg"
                        />
                      </button>
                      <button
                        style={{
                          cursor: "pointer",
                          border: "none",
                          padding: "0",
                          backgroundColor: "transparent",
                          position: "relative",
                          width: "15px",
                          height: "15px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                      >
                        <img
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            top: "0%",
                            right: "0%",
                            bottom: "0%",
                            left: "0%",
                            maxWidth: "100%",
                            overflow: "hidden",
                            maxHeight: "100%",
                          }}
                          alt=""
                          src="/vector4.svg"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      fontSize: "10px",
                      letterSpacing: "0.02em",
                      fontWeight: "600",
                      fontFamily: "'Baloo 2'",
                      color: "#8b9bb4",
                      display: "inline-block",
                      width: "334px",
                    }}
                  >
                    New Game Mode: Capture Flag! - Experimenting with 254p, also
                    playable on 128p and 64p series.
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "4px",
                    fontSize: "10px",
                    color: "#8b9bb4",
                    fontFamily: "'Baloo 2'",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "flex-end",
                        width: "441px",
                        height: "26px",
                        flexShrink: "0",
                      }}
                    >
                      Capture the flag, if flag is carried over to any safe
                      zone, main base etc, iw will be auto teklleported back to
                      flag’s spawn to prevent someone keeping flag in safe zone.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      UI Improvements for Capture The Flag.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      The spectator mode has been further improved.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      Player lag has been improved during rope climbing.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "flex-end",
                        width: "441px",
                        height: "26px",
                        flexShrink: "0",
                      }}
                    >
                      Capture the flag, if flag is carried over to any safe
                      zone, main base etc, iw will be auto teklleported back to
                      flag’s spawn to prevent someone keeping flag in safe zone.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      UI Improvements for Capture The Flag.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      The spectator mode has been further improved.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      Player lag has been improved during rope climbing.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "flex-end",
                        width: "441px",
                        height: "26px",
                        flexShrink: "0",
                      }}
                    >
                      Capture the flag, if flag is carried over to any safe
                      zone, main base etc, iw will be auto teklleported back to
                      flag’s spawn to prevent someone keeping flag in safe zone.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      UI Improvements for Capture The Flag.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      The spectator mode has been further improved.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      Player lag has been improved during rope climbing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                flex: "1",
                borderRadius: "6px",
                backgroundColor: "#22283b",
                width: "487px",
                overflow: "hidden",
                display: "none",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "12px 12px 0px",
                boxSizing: "border-box",
                fontSize: "14px",
              }}
            >
              <div
                style={{
                  width: "475px",
                  height: "227px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <b
                    style={{
                      alignSelf: "stretch",
                      position: "relative",
                      letterSpacing: "0.02em",
                    }}
                  >{`Patch Notes 1.00.92 `}</b>
                  <div
                    style={{
                      alignSelf: "stretch",
                      position: "relative",
                      fontSize: "10px",
                      letterSpacing: "0.02em",
                      fontWeight: "600",
                      fontFamily: "'Baloo 2'",
                      color: "#8b9bb4",
                    }}
                  >
                    New Game Mode: Capture Flag! - Experimenting with 254p, also
                    playable on 128p and 64p series.
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "4px",
                    fontSize: "10px",
                    color: "#8b9bb4",
                    fontFamily: "'Baloo 2'",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "flex-end",
                        width: "441px",
                        height: "26px",
                        flexShrink: "0",
                      }}
                    >
                      Capture the flag, if flag is carried over to any safe
                      zone, main base etc, iw will be auto teklleported back to
                      flag’s spawn to prevent someone keeping flag in safe zone.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      UI Improvements for Capture The Flag.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      The spectator mode has been further improved.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      Player lag has been improved during rope climbing.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "flex-end",
                        width: "441px",
                        height: "26px",
                        flexShrink: "0",
                      }}
                    >
                      Capture the flag, if flag is carried over to any safe
                      zone, main base etc, iw will be auto teklleported back to
                      flag’s spawn to prevent someone keeping flag in safe zone.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      UI Improvements for Capture The Flag.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      The spectator mode has been further improved.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      Player lag has been improved during rope climbing.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "flex-end",
                        width: "441px",
                        height: "26px",
                        flexShrink: "0",
                      }}
                    >
                      Capture the flag, if flag is carried over to any safe
                      zone, main base etc, iw will be auto teklleported back to
                      flag’s spawn to prevent someone keeping flag in safe zone.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      UI Improvements for Capture The Flag.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      The spectator mode has been further improved.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        backgroundColor: "#8b9bb4",
                        width: "4px",
                        height: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: "500",
                      }}
                    >
                      Player lag has been improved during rope climbing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: "6px",
                backgroundColor: "#22283b",
                width: "487px",
                height: "23px",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "0px 16px",
                boxSizing: "border-box",
                gap: "8px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  width: "18px",
                  height: "17px",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/fontistoradiobtnactive1.svg"
              />
              <b
                style={{
                  alignSelf: "stretch",
                  flex: "1",
                  position: "relative",
                  letterSpacing: "0.02em",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Last Played
              </b>
              <div
                style={{
                  position: "relative",
                  letterSpacing: "0.02em",
                  fontWeight: "600",
                  color: "#8b9bb4",
                  textAlign: "right",
                }}
              >
                Monday, 12 August 2023
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "11px",
            fontSize: "16px",
            color: "#fff",
            fontFamily: "'Baloo Bhai 2'",
          }}
        >
          <div
            style={{
              width: "541px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "7px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                borderRadius: "8px",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "8px 16px",
                gap: "2px",
              }}
            >
              <b style={{ position: "relative", letterSpacing: "0.02em" }}>
                Update Notes
              </b>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  color: "#cadbf5",
                  fontFamily: "'Baloo 2'",
                }}
              >
                <div
                  style={{
                    width: "148px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <div style={{ position: "relative", fontWeight: "600" }}>
                    Prepare to download New updates 1.00.92 (1.6 GB)
                  </div>
                </div>
                <div style={{ position: "relative", fontWeight: "600" }}>
                  Time Remaining: 88:88:88
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                borderRadius: "8px",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                height: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                fontSize: "14px",
                fontFamily: "'Baloo 2'",
              }}
            >
              <div
                style={{
                  flex: "1",
                  borderRadius: "8px",
                  background: "linear-gradient(180deg, #3e8948, #265c42)",
                  border: "2px solid rgba(0, 0, 0, 0.2)",
                  overflow: "hidden",
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 192px",
                }}
              >
                <b style={{ position: "relative" }}>80%</b>
              </div>
              <b style={{ position: "relative" }}>0%</b>
            </div>
          </div>
          <button
            style={{
              cursor: "pointer",
              border: "2px solid rgba(0, 0, 0, 0.2)",
              padding: "16px",
              backgroundColor: "transparent",
              flex: "1",
              borderRadius: "10px",
              background: "linear-gradient(180deg, #8b9bb4, #5a6988)",
              boxSizing: "border-box",
              height: "110px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={onButtonClick}
          >
            <b
              style={{
                position: "relative",
                fontSize: "24px",
                letterSpacing: "0.02em",
                lineHeight: "120%",
                fontFamily: "'Baloo Bhai 2'",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <p style={{ margin: "" }}>Prepare to</p>
              <p style={{ margin: "" }}>Update</p>
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatchNotesPreparingScreen;
