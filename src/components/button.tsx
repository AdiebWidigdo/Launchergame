import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Button: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/patchnotespreparingscreen");
  }, [navigate]);

  return (
    <button
      className="cursor-pointer py-[35px] px-[39px] bg-[transparent] flex-1 rounded-lg [background:linear-gradient(180deg,_#0099db,_#1e6dd5)] box-border h-[110px] flex flex-row items-center justify-center border-[2px] border-solid border-gray-300"
      onClick={onButtonClick}
    >
      <b className="flex-1 relative text-5xl tracking-[0.02em] leading-[120%] font-baloo-bhai-2 text-white text-center">
        Play Game
      </b>
    </button>
  );
};

export default Button;
