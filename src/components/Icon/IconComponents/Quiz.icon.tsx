import Svg, { type SvgProps, Path } from 'react-native-svg';
export const QuizIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.4 3.9999H21.6"
      stroke={props.stroke ?? '#000#'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.4 8H21.6"
      stroke={props.stroke ?? '#000#'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.4 15.9999H21.6"
      stroke={props.stroke ?? '#000#'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.4 20H21.6"
      stroke={props.stroke ?? '#000#'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.98578 9.41421C3.57157 10 4.51438 10 6.39999 10C8.28561 10 9.22842 10 9.81421 9.41421C10.4 8.82843 10.4 7.88562 10.4 6C10.4 4.11438 10.4 3.17157 9.81421 2.58579C9.22842 2 8.28561 2 6.39999 2C4.51438 2 3.57157 2 2.98578 2.58579C2.39999 3.17157 2.39999 4.11438 2.39999 6C2.39999 7.88562 2.39999 8.82843 2.98578 9.41421Z"
      stroke={props.stroke ?? '#000#'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.98578 21.4141C3.57157 21.9999 4.51438 21.9999 6.39999 21.9999C8.28561 21.9999 9.22842 21.9999 9.81421 21.4141C10.4 20.8283 10.4 19.8855 10.4 17.9999C10.4 16.1143 10.4 15.1715 9.81421 14.5857C9.22842 13.9999 8.28561 13.9999 6.39999 13.9999C4.51438 13.9999 3.57157 13.9999 2.98578 14.5857C2.39999 15.1715 2.39999 16.1143 2.39999 17.9999C2.39999 19.8855 2.39999 20.8283 2.98578 21.4141Z"
      stroke={props.stroke ?? '#000#'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
