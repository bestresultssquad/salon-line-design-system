import Svg, { type SvgProps, Path } from 'react-native-svg';

export const SmartPhoneIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M4.16699 7.49996C4.16699 4.7501 4.16699 3.37517 5.02126 2.5209C5.87554 1.66663 7.25047 1.66663 10.0003 1.66663C12.7502 1.66663 14.1251 1.66663 14.9794 2.5209C15.8337 3.37517 15.8337 4.7501 15.8337 7.49996V12.5C15.8337 15.2498 15.8337 16.6247 14.9794 17.479C14.1251 18.3333 12.7502 18.3333 10.0003 18.3333C7.25047 18.3333 5.87554 18.3333 5.02126 17.479C4.16699 16.6247 4.16699 15.2498 4.16699 12.5V7.49996Z"
      stroke={props.stroke || 'black'}
      strokeWidth={1.25}
      strokeLinecap="round"
    />
    <Path
      d="M9.16699 15.8333H10.8337"
      stroke={props.stroke || 'black'}
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.5 1.66663L7.57417 2.11164C7.7349 3.07604 7.81527 3.55823 8.14599 3.85166C8.49098 4.15774 8.98012 4.16663 10 4.16663C11.0199 4.16663 11.509 4.15774 11.854 3.85166C12.1847 3.55824 12.2651 3.07603 12.4258 2.11164L12.5 1.66663"
      stroke={props.stroke || 'black'}
      strokeWidth={1.25}
      strokeLinejoin="round"
    />
  </Svg>
);
