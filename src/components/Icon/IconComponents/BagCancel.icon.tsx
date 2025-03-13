import Svg, { type SvgProps, Path } from 'react-native-svg';

export const BagCancel = (props: SvgProps) => (
  <Svg
    width={props.width ?? 80}
    height={props.height ?? 80}
    viewBox="0 0 80 80"
    fill="none"
    {...props}
  >
    <Path
      d="M23.832 26.667V21.2124C23.832 13.1792 30.5478 6.66699 38.832 6.66699C47.1163 6.66699 53.832 13.1792 53.832 21.2124V26.667"
      stroke={props.stroke ?? '#9CA3AF'}
      strokeWidth={props.strokeWidth ?? 5}
    />
    <Path
      d="M65.4993 38.3383C62.0965 28.2676 57.8456 25 45.2629 25H32.6666C19.6503 25 14.6153 28.2944 11.0157 40.7969C7.77345 52.058 6.15234 57.6886 7.84723 62.0551C8.8852 64.7292 10.7281 67.048 13.1425 68.7179C17.2838 71.5821 27.0585 73.15 37.166 73.3333"
      stroke={props.stroke ?? '#9CA3AF'}
      strokeWidth={props.strokeWidth ?? 5}
      strokeLinecap="round"
    />
    <Path
      d="M47.166 50L58.8327 61.6667M58.8327 61.6667L70.4993 73.3333M58.8327 61.6667L47.166 73.3333M58.8327 61.6667L70.4993 50"
      stroke={props.stroke ?? '#9CA3AF'}
      strokeWidth={props.strokeWidth ?? 5}
      strokeLinecap="round"
    />
    <Path
      d="M35.5 36.667H42.1667"
      stroke={props.stroke ?? '#9CA3AF'}
      strokeWidth={props.strokeWidth ?? 5}
      strokeLinecap="round"
    />
  </Svg>
);
