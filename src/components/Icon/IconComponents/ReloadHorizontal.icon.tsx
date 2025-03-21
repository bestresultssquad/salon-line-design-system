import Svg, { type SvgProps, Path } from 'react-native-svg';

export const ReloadHorizontal = (props: SvgProps) => (
  <Svg
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M17.0833 4.5835H7.91667C4.82227 4.5835 2.5 6.82102 2.5 10.0002"
      stroke={props.stroke || 'black'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.91667 15.4165H12.0833C15.1777 15.4165 17.5 13.179 17.5 9.99984"
      stroke={props.stroke || 'black'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.4165 6.66667L17.0455 5.17259C17.3484 4.89481 17.4998 4.75592 17.4998 4.58333C17.4998 4.41074 17.3484 4.27186 17.0455 3.99408L15.4165 2.5"
      stroke={props.stroke || 'black'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.58333 13.3335L2.9543 14.8276C2.65143 15.1054 2.5 15.2442 2.5 15.4168C2.5 15.5894 2.65143 15.7283 2.9543 16.0061L4.58333 17.5002"
      stroke={props.stroke || 'black'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
