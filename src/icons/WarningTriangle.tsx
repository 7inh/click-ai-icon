import React from 'react';
import IconSvg from './WarningTriangle.svg';


const WarningTriangle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <IconSvg {...props} />
);

export default WarningTriangle;
