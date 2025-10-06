import Svg, { type SvgProps, Path } from 'react-native-svg';

export const TickDoubleIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 37}
    height={props.height ?? 37}
    viewBox="0 0 37 37"
    fill="none"
    {...props}
  >
    <Path
      d="M4.25 21.25L9.5 26.75L11.036 25.1408M25.25 10.25L16.1556 19.7775"
      stroke={props.stroke ?? '#047857'}
      strokeWidth={props.strokeWidth ?? 2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.75 21.25L17 26.75L32.75 10.25"
      stroke={props.stroke ?? '#047857'}
      strokeWidth={props.strokeWidth ?? 2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
