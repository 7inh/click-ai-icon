import React from 'react';
import IconSvg from './star.svg';

export interface IconProps {
  size?: number;
  color?: string;
}

const Star: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => (
  <IconSvg width={size} height={size} fill={color} />
);

export default Star;
