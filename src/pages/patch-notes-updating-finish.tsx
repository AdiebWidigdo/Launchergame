import { FunctionComponent } from "react";
import TopSection from "../components/top-section";
import ButtomSection from "../components/buttom-section";

const PatchNotesUpdatingFinish: FunctionComponent = () => {
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
        <TopSection />
        <ButtomSection />
      </div>
    </div>
  );
};

export default PatchNotesUpdatingFinish;
