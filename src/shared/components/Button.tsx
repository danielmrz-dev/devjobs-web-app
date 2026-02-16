type ButtonProps = {
  disabled?: boolean;
  classes: string;
  buttonText: string;
};

export const Button = ({ disabled, classes, buttonText }: ButtonProps) => {
  return (
    <button className={classes} disabled={disabled}>
      {buttonText}
    </button>
  );
};
