import Svg, { type SvgProps, Path } from 'react-native-svg';
export const SunIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M14.1673 9.99992C14.1673 12.3011 12.3018 14.1666 10.0007 14.1666C7.69946 14.1666 5.83398 12.3011 5.83398 9.99992C5.83398 7.69873 7.69946 5.83325 10.0007 5.83325C12.3018 5.83325 14.1673 7.69873 14.1673 9.99992Z"
      stroke={props.stroke ?? '#F9FAFB'}
      strokeWidth={props.strokeWidth ?? 1.25}
    />
    <Path
      d="M10.0003 1.66663V2.91663M10.0003 17.0833V18.3333M15.8927 15.8927L15.0088 15.0088M4.99137 4.99101L4.10749 4.10712M18.3337 9.99996H17.0837M2.91699 9.99996H1.66699M15.8931 4.10722L15.0092 4.9911M4.99178 15.0089L4.1079 15.8928"
      stroke={props.stroke ?? '#F9FAFB'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
    />
  </Svg>
);
