import Svg, { type SvgProps, Path } from 'react-native-svg';

export const HomeIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M9.56165 4.82633L3.73911 9.92134C3.2398 10.3583 3.57458 11.1343 4.26238 11.1343C4.68259 11.1343 5.02324 11.4489 5.02324 11.8371V15.0806C5.02324 17.871 5.02324 19.2662 5.96176 20.1331C6.90029 21 8.41082 21 11.4319 21H13.5681C16.5892 21 18.0997 21 19.0382 20.1331C19.9768 19.2662 19.9768 17.871 19.9768 15.0806V11.8371C19.9768 11.4489 20.3174 11.1343 20.7376 11.1343C21.4254 11.1343 21.7602 10.3583 21.2609 9.92134L15.4383 4.82633C14.0469 3.60878 13.3512 3 12.5 3C11.6488 3 10.9531 3.60878 9.56165 4.82633Z"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.50909 21L9.25845 17.4911C9.1237 15.6046 10.6178 14 12.5091 14C14.4004 14 15.8945 15.6046 15.7597 17.4911L15.5091 21"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.5}
    />
  </Svg>
);
