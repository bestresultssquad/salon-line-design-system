import Svg, { type SvgProps, Path, Ellipse } from 'react-native-svg';

export const DiscountTag2Icon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.9961 10.0011H11.0111M10.9998 16.0011H11.0148"
      strokeWidth={1.66667}
      stroke={props.stroke || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.99998 13.0017H15"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth || 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Ellipse
      cx={1.5}
      cy={1.5}
      rx={1.5}
      ry={1.5}
      transform="matrix(1 0 0 -1 16 8.00037)"
      strokeWidth={props.strokeWidth || 1.25}
      stroke={props.stroke || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.77421 11.1455C1.77107 12.2659 1.74949 13.9562 2.67015 15.1453C4.4971 17.5048 6.49672 19.5045 8.85631 21.3314C10.0454 22.2521 11.7357 22.2305 12.8561 21.2274C15.8979 18.5038 18.6835 15.6575 21.3719 12.5295C21.6376 12.2203 21.8039 11.8413 21.8412 11.4352C22.0062 9.63957 22.3452 4.46626 20.9402 3.06133C19.5353 1.6564 14.362 1.99535 12.5664 2.16035C12.1603 2.19766 11.7813 2.36392 11.472 2.6297C8.34411 5.31804 5.49779 8.1037 2.77421 11.1455Z"
      strokeWidth={props.strokeWidth || 1.25}
      stroke={props.stroke || '#000'}
    />
  </Svg>
);
