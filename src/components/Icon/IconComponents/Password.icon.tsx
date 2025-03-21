import Svg, { type SvgProps, Path } from 'react-native-svg';

export const PasswordIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 25}
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <Path
      d="M21.544 11.5186C21.848 11.9449 22 12.1581 22 12.4736C22 12.7892 21.848 13.0023 21.544 13.4286C20.1779 15.3442 16.6892 19.4736 12 19.4736C7.31078 19.4736 3.8221 15.3442 2.45604 13.4286C2.15201 13.0023 2 12.7892 2 12.4736C2 12.1581 2.15201 11.9449 2.45604 11.5186C3.8221 9.60307 7.31078 5.47363 12 5.47363C16.6892 5.47363 20.1779 9.60307 21.544 11.5186Z"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.5}
    />
    <Path
      d="M15 12.4736C15 10.8168 13.6569 9.47363 12 9.47363C10.3431 9.47363 9 10.8168 9 12.4736C9 14.1305 10.3431 15.4736 12 15.4736C13.6569 15.4736 15 14.1305 15 12.4736Z"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.5}
    />
  </Svg>
);
