import Svg, { type SvgProps, Path } from 'react-native-svg';

export const DeliveryTracking = (props: SvgProps) => (
  <Svg
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M10.417 18.3327H9.0744C5.58251 18.3327 3.83657 18.3327 2.75178 17.2866C1.66699 16.2406 1.66699 14.557 1.66699 11.1898V6.66602H18.3337V8.74935"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.0003 9.99902C13.1594 9.99902 11.667 11.5065 11.667 13.366C11.667 14.4292 12.0837 15.256 12.917 15.9944C13.5044 16.5149 14.216 17.3795 14.6432 18.0803C14.8481 18.4164 15.1378 18.4164 15.3575 18.0803C15.8063 17.3934 16.4963 16.5149 17.0837 15.9944C17.917 15.256 18.3337 14.4292 18.3337 13.366C18.3337 11.5065 16.8413 9.99902 15.0003 9.99902Z"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinejoin="round"
    />
    <Path
      d="M15.0005 13.333H15.008"
      stroke={props.stroke ?? 'black'}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.66699 6.66602L2.46827 4.74294C3.08971 3.25149 3.40043 2.50576 4.03024 2.08589C4.66005 1.66602 5.46792 1.66602 7.08366 1.66602H12.917C14.5327 1.66602 15.3406 1.66602 15.9704 2.08589C16.6002 2.50576 16.9109 3.25149 17.5324 4.74294L18.3337 6.66602"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
    />
    <Path
      d="M10.0005 6.66602V1.66602"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
    />
    <Path
      d="M8.3335 9.99902H10.0002"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
    />
  </Svg>
);
