import Svg, { type SvgProps, Path } from 'react-native-svg';

export const MoonIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M17.9163 11.732C16.9166 12.2658 15.7748 12.5684 14.5623 12.5684C10.6239 12.5684 7.43127 9.37577 7.43127 5.43742C7.43127 4.22492 7.73389 3.08311 8.2677 2.08337C4.72272 2.91419 2.08301 6.09598 2.08301 9.89431C2.08301 14.325 5.67476 17.9167 10.1054 17.9167C13.9037 17.9167 17.0855 15.277 17.9163 11.732Z"
      stroke={props.stroke ?? '#F9FAFB'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
