import "./SwitchButton.scss";

export const SwitchButton = () => {
  return (
    <label className="switch">
      <input type="checkbox"/>
      <span className="slider round"></span>
    </label>
  );
}
