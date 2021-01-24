import { ReactNode } from "react";
import styles from "./Container.module.scss";
import classNames from "classnames";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Container = ({ children, className = "", id = undefined }: ContainerProps) => {
  const finalClass = classNames(styles.block, className);
  return <div className={finalClass} id={id}>{children}</div>;
};

export default Container;
