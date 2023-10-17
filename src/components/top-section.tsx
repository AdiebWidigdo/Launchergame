import { FunctionComponent } from "react";
import SetArticles from "./set-articles";
import BannerPatchnotes from "./banner-patchnotes";

const TopSection: FunctionComponent = () => {
  return (
    <div className="flex flex-row items-start justify-start gap-[8px] text-left text-3xs text-lightslategray font-baloo-2">
      <SetArticles />
      <BannerPatchnotes />
    </div>
  );
};

export default TopSection;
