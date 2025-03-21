import Svg, { type SvgProps, Path } from 'react-native-svg';

export const PasswordLockIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M22 8.47363C22 8.47363 18 14.4736 12 14.4736C6 14.4736 2 8.47363 2 8.47363"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15 13.9736L16.5 16.4736"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 11.4736L22 13.4736"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 13.4736L4 11.4736"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 13.9736L7.5 16.4736"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
