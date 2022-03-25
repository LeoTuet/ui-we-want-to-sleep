import styles from "./CustomButton.module.scss";
import classNames from "classnames";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export const CustomButton = ({
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={classNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
