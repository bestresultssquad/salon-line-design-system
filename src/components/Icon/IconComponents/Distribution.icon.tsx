import Svg, { type SvgProps, Path } from 'react-native-svg';
export const DistributionIcon = (props: SvgProps) => (
  <Svg
    width={props.width || 20}
    height={props.height || 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M3.75 8.55442V5H16.25V8.55442C16.25 11.2001 16.25 12.5229 15.4364 13.3448C14.6228 14.1667 13.3134 14.1667 10.6944 14.1667H9.30556C6.68664 14.1667 5.37718 14.1667 4.56359 13.3448C3.75 12.5229 3.75 11.2001 3.75 8.55442Z"
      stroke={props.stroke || 'black'}
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.75 5.00033L4.35096 3.71827C4.81704 2.72397 5.05008 2.22682 5.52244 1.94691C5.9948 1.66699 6.6007 1.66699 7.8125 1.66699H12.1875C13.3993 1.66699 14.0052 1.66699 14.4776 1.94691C14.9499 2.22682 15.183 2.72397 15.649 3.71827L16.25 5.00033"
      stroke={props.stroke || 'black'}
      strokeWidth={1.25}
      strokeLinecap="round"
    />
    <Path
      d="M8.75 7.5H11.25"
      stroke={props.stroke || 'black'}
      strokeWidth={1.25}
      strokeLinecap="round"
    />
    <Path
      d="M3.33301 18.3333H9.99967M16.6663 18.3333H9.99967M9.99967 18.3333V16.25"
      stroke={props.stroke || 'black'}
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
