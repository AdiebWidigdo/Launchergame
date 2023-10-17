import { FunctionComponent } from "react";
import UpdateNotesProgress from "./update-notes-progress";
import Button from "./button";

const ButtomSection: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[11px] text-left text-base text-white font-baloo-bhai-2">
      <UpdateNotesProgress />
      <Button />
    </div>
  );
};

export default ButtomSection;
