import { ReactNode } from "react";
import { Link as ScrollLink } from "react-scroll";

const Scroll = ({ children, to, withOffset = false }: {
    children: ReactNode;
    to: string;
    withOffset?: boolean;
}) => (
    <ScrollLink active={undefined} to={to} offset={withOffset ? -65 : 0} smooth={"easeInOutCubic"} spy={true}>
        {children}
    </ScrollLink>
)

export default Scroll;
  