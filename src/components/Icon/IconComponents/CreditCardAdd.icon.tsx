import Svg, { type SvgProps, Path } from 'react-native-svg';

export const CreditCardAdd = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M12.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C21.8394 6.51358 21.9755 7.93642 21.9963 10.5"
      stroke={props.color ?? 'black'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.5 20L18.5 13M15 16.5H22"
      stroke={props.color ?? 'black'}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2 9H22"
      stroke={props.color ?? 'black'}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);
