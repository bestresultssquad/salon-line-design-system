import type { Props } from './Icon.types';
import { IconsComponent } from './Icons';

const Icon = ({
  type = 'ShareIcon',
  width,
  height,
  stroke,
  strokeWidth,
  fill,
  ...props
}: Props) => {
  const IconComponent = IconsComponent[type];

  return (
    <IconComponent
      width={width}
      height={height}
      stroke={stroke}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      fill={fill ?? 'none'}
      {...props}
    />
  );
};

export default Icon;
