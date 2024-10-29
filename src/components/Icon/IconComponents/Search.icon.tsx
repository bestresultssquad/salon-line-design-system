import Svg, { type SvgProps, Path } from 'react-native-svg';

export const SearchIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17.5 17.5L22 22"
      strokeWidth={props.strokeWidth || 1.5}
      stroke={props.stroke || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinejoin="round"
    />
  </Svg>
);
