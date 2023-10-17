import { FunctionComponent } from "react";

const UpdateNotesProgress: FunctionComponent = () => {
  return (
    <div
      style={{
        width: "541px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "7px",
        textAlign: "left",
        fontSize: "16px",
        color: "#fff",
        fontFamily: "'Baloo Bhai 2'",
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
              flex: "1",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{ position: "relative", fontWeight: "600" }}
            >{`Downloaded New updates 1.00.92 `}</div>
          </div>
          <div style={{ position: "relative", fontWeight: "600" }}>
            Completed!
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
          alignItems: "flex-start",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "14px",
          fontFamily: "'Baloo 2'",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            borderRadius: "8px",
            background: "linear-gradient(180deg, #3e8948, #265c42)",
            border: "2px solid rgba(0, 0, 0, 0.2)",
            boxSizing: "border-box",
            height: "24px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "0px 192px",
          }}
        >
          <b style={{ flex: "1", position: "relative" }}>100%</b>
        </div>
      </div>
    </div>
  );
};

export default UpdateNotesProgress;
