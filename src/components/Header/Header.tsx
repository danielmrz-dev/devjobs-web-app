import "./Header.scss";
import logo from "../../assets/logo.svg";
import { SwitchButton } from "./components/SwitchButton/SwitchButton";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Devjobs logo"/>
      <div className="header__toggle-theme">
        <button>sun</button>
        <SwitchButton/>
        <button>moon</button>
      </div>
    </header>
  );
}
