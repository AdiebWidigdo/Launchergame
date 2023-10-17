import { FunctionComponent } from "react";
import SetArticles from "./set-articles";
import BannerPatchnotes from "./banner-patchnotes";

const TopSection: FunctionComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "8px",
        textAlign: "left",
        fontSize: "10px",
        color: "#8b9bb4",
        fontFamily: "'Baloo 2'",
      }}
    >
      <SetArticles />
      <BannerPatchnotes />
    </div>
  );
};

export default TopSection;
