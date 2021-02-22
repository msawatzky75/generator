import type { FunctionComponent } from "react";

interface Props {
  className?: string;
  // this is changed when the button is disabled, if you want the button to stay the same color when disabled, use `className`
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: FunctionComponent<Props> = function ({
  className,
  color,
  disabled,
  onClick,
  children,
  ...rest
}) {
  return (
    <>
      <button
        type="button"
        className={
          className +
          " px-4 py-2 rounded " +
          (disabled
            ? "dark:bg-gray-700 text-gray-500 cursor-default"
            : `focus:outline-white ${color}`)
        }
        onClick={() => {
          onClick && !disabled && onClick();
        }}
        title={disabled ? "Disabled" : ""}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
