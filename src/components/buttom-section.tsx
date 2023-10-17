import { FunctionComponent } from "react";
import UpdateNotesProgress from "./update-notes-progress";
import Button from "./button";

const ButtomSection: FunctionComponent = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "11px",
        textAlign: "left",
        fontSize: "16px",
        color: "#fff",
        fontFamily: "'Baloo Bhai 2'",
      }}
    >
      <UpdateNotesProgress />
      <Button />
    </div>
  );
};

export default ButtomSection;
