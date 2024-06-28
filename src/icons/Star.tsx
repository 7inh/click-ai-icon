import React from 'react';
import { ReactComponent as IconSvg } from './star.svg';


const Star: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <IconSvg {...props} />
);

export default Star;