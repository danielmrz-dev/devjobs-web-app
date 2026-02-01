import "./Header.scss";
import logo from "../../assets/logo.svg";
import moon from "../../assets/desktop/icon-moon.svg";
import sun from "../../assets/desktop/icon-sun.svg";
import { SwitchButton } from "./components/SwitchButton/SwitchButton";
import { Filter } from "../Filter/Filter";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Devjobs logo"/>
      <div className="header__toggle-theme">
        <button className="header__theme-btn">
          <img src={sun} alt="" />
        </button>
        <SwitchButton/>
        <button className="header__theme-btn">
          <img src={moon} alt="" />
        </button>        
      </div>
      <Filter />
    </header>
  );
}
