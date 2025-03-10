import Svg, { type SvgProps, Path } from 'react-native-svg';

export const SearchCancel = (props: SvgProps) => (
  <Svg
    width={props.width ?? 81}
    height={props.height ?? 80}
    viewBox="0 0 81 80"
    fill="none"
    {...props}
  >
    <Path
      d="M58.833 58.333L73.833 73.333"
      stroke={props.stroke ?? '#9CA3AF'}
      strokeWidth={props.strokeWidth ?? 5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M67.166 36.666C67.166 20.0975 53.7346 6.66602 37.166 6.66602C20.5975 6.66602 7.16602 20.0975 7.16602 36.666C7.16602 53.2346 20.5975 66.666 37.166 66.666C53.7346 66.666 67.166 53.2346 67.166 36.666Z"
      stroke={props.stroke ?? '#9CA3AF'}
      strokeWidth={props.strokeWidth ?? 5}
      strokeLinejoin="round"
    />
    <Path
      d="M27.166 46.666L47.166 26.666M27.166 26.666L47.166 46.666"
      stroke={props.stroke ?? '#9CA3AF'}
      strokeWidth={props.strokeWidth ?? 5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
