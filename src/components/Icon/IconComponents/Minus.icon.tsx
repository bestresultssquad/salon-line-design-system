import Svg, { Path, type SvgProps } from 'react-native-svg';

export const MinusIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20 12L4 12"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth || 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
