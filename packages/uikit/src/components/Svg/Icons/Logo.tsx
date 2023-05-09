import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 198 199" {...props}>
          <image href="https://i.ibb.co/BVTnV88/rgb-01-removebg-preview-1.png" widths="198" height="199"/>

    </Svg>
  );
};

export default Icon;
