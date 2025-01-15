import Svg, { type SvgProps, Path } from 'react-native-svg';

export const TickIcon = (props: SvgProps) => (
  <Svg
    width={props.width || 20}
    height={props.height || 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M4.16602 11.667L7.08268 14.5837L15.8327 5.41699"
      stroke={props.stroke || '#000'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
