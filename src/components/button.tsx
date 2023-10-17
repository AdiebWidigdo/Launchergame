import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Button: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/patchnotespreparingscreen");
  }, [navigate]);

  return (
    <button
      style={{
        cursor: "pointer",
        border: "2px solid rgba(0, 0, 0, 0.2)",
        padding: "35px 39px",
        backgroundColor: "transparent",
        flex: "1",
        borderRadius: "8px",
        background: "linear-gradient(180deg, #0099db, #1e6dd5)",
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
          flex: "1",
          position: "relative",
          fontSize: "24px",
          letterSpacing: "0.02em",
          lineHeight: "120%",
          fontFamily: "'Baloo Bhai 2'",
          color: "#fff",
          textAlign: "center",
        }}
      >
        Play Game
      </b>
    </button>
  );
};

export default Button;
