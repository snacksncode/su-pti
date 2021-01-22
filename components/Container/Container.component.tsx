import { ReactNode } from 'react';
import styles from "./Container.module.scss";
import classNames from 'classnames';

const Container = ({ children, className = "" }: {
  children: ReactNode,
  className?: string
}) => {
  const finalClass = classNames(styles.block, className);
  return <div className={finalClass}>{children}</div>;
};

export default Container;
