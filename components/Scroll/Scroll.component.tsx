import { ReactNode } from "react";
import { Link as ScrollLink } from "react-scroll";

const Scroll = ({ children, to, withOffset = false, onClick }: {
    children: ReactNode;
    to: string;
    withOffset?: boolean;
    onClick?: () => void;
}) => (
    <ScrollLink active={undefined} onClick={onClick} to={to} offset={withOffset ? -65 : 0} smooth={"easeInOutCubic"} spy={true}>
        {children}
    </ScrollLink>
)

export default Scroll;
  