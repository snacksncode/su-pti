import { ReactNode } from "react";
import styles from "./Container.module.scss";
import classNames from "classnames";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  const finalClass = classNames(styles.block, className);
  return <div className={finalClass}>{children}</div>;
};

export default Container;
