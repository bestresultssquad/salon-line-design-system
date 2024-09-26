import type { Props } from './Icon.types';
import { Icons } from './Icons';

const Icon = ({
  type = 'share',
  width,
  height,
  stroke,
  strokeWidth,
  ...props
}: Props) => {
  const IconComponent = Icons[type];

  return (
    <IconComponent
      width={width}
      height={height}
      stroke={stroke}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    />
  );
};

export default Icon;
