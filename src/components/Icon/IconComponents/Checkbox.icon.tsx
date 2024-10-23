import Svg, { type SvgProps, Rect } from 'react-native-svg';

export const CheckboxIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Rect
      x={0.416667}
      y={0.416667}
      width={19.1667}
      height={19.1667}
      rx={6.25}
      stroke={props.stroke || '#000'}
      strokeWidth={0.833333}
    />
  </Svg>
);