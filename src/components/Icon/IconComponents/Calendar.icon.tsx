import Svg, { type SvgProps, Path } from 'react-native-svg';

export const CalendarIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M18 2v2M6 2v2" stroke={props.stroke || '#000'} />
    <Path
      d="M11.996 13h.008m-.008 4h.008m3.987-4H16m-8 0h.009M8 17h.009"
      stroke={props.stroke || '#000'}
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.5 8h17m-18 4.243c0-4.357 0-6.536 1.252-7.89C5.004 3 7.02 3 11.05 3h1.9c4.03 0 6.046 0 7.298 1.354C21.5 5.707 21.5 7.886 21.5 12.244v.513c0 4.357 0 6.536-1.252 7.89C18.996 22 16.98 22 12.95 22h-1.9c-4.03 0-6.046 0-7.298-1.354C2.5 19.293 2.5 17.114 2.5 12.756zM3 8h18"
      stroke={props.stroke || '#000'}
    />
  </Svg>
);
