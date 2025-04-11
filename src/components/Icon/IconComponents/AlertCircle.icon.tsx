import Svg, { type SvgProps, Circle, Path } from 'react-native-svg';
export const AlertCircleIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={12}
      cy={12}
      r={10}
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth ?? 1.25}
    />
    <Path
      d="M11.992 15H12.001"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth ?? 1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 12L12 8"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
