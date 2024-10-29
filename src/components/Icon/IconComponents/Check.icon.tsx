import Svg, { type SvgProps, Path } from 'react-native-svg';

export const CheckIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth || 1.5}
    />
    <Path
      d="M8 12.5L10.5 15L16 9"
      stroke={props.stroke || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth || 1.5}
    />
  </Svg>
);
