import { vars } from "@pancakeswap/ui/css/vars.css";
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Logo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 1281 199" {...props}>
    <image href="https://i.ibb.co/BVTnV88/rgb-01-removebg-preview-1.png" width="1281px" height="199px"/>
  </Svg>
  );
};

export default Logo;
