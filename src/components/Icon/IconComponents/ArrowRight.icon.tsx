import Svg, { type SvgProps, Path } from 'react-native-svg';

export const ArrowRightIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      d="M19.0001 11.9998L4.00012 11.9998"
      stroke={props.stroke || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 6.9999L19.5286 11.5285C19.7508 11.7507 19.8619 11.8618 19.8619 11.9999C19.8619 12.138 19.7508 12.2491 19.5285 12.4713L15 16.9999"
      stroke={props.stroke || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
