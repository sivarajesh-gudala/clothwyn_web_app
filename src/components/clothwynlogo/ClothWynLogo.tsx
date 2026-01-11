import "./ClothwynLogo.scss";
import logo from "../../assets/logo/clothwyn_logo_text.svg";

const ClothwynLogo = ({ size = "medium", animated = false }) => {
  return (
    <div className={`clothwyn-logo ${size} ${animated ? "animate" : ""}`}>
      <img src={logo} alt="Clothwyn Logo" />
    </div>
  );
};

export default ClothwynLogo;
