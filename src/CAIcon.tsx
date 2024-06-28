import React from 'react';
import Star from './icons/Star';

const icons: Record<string,React.FC<IconProps>>  = {
  star: Star,
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons;
  size?: number;
  color?: string;
}

const CAIcon: React.FC<IconProps> = ({ name, size, color, ...props }) => {
  const SvgIcon = icons[name];
  return <SvgIcon name={name} width={size} height={size} fill={color} {...props} />;
};

export default CAIcon;
