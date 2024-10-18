import Svg, { type SvgProps, Path, Circle } from 'react-native-svg';

export const ErrorIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15.5 8.5L12 12M12 12L8.50001 15.5M12 12L15.5 15.5M12 12L8.50001 8.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={props.stroke || '#000'}
    />
    <Circle cx={12} cy={12} r={10} stroke={props.stroke || '#000'} />
  </Svg>
);
