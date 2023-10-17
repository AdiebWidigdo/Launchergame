import { FunctionComponent } from "react";
import TopSection from "../components/top-section";
import ButtomSection from "../components/buttom-section";

const PatchNotesUpdatingFinish: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[813px] overflow-hidden bg-[url('/public/patchnotesupdatingfinish@3x.png')] bg-cover bg-no-repeat bg-[top]">
      <div className="absolute top-[calc(50%_-_299.5px)] left-[calc(50%_-_400px)] rounded-2xl [background:linear-gradient(180deg,_#262b44,_#3a4466)] w-[800px] h-[600px] flex flex-col items-center justify-start p-4 box-border gap-[8px] mix-blend-normal">
        <TopSection />
        <ButtomSection />
      </div>
    </div>
  );
};

export default PatchNotesUpdatingFinish;
