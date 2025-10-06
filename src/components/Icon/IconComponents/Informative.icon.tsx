import Svg, { type SvgProps, Path } from 'react-native-svg';

export const InformativeIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M17.1426 10C17.1426 6.05513 13.9447 2.85717 9.99979 2.85717C6.0549 2.85717 2.85693 6.05513 2.85693 10C2.85693 13.9449 6.0549 17.1429 9.99979 17.1429C13.9447 17.1429 17.1426 13.9449 17.1426 10Z"
      stroke={props.stroke ?? '#660EBA'}
      strokeWidth={props.strokeWidth ?? 1.42857}
    />
    <Path
      d="M10.1728 13.5714V9.99999C10.1728 9.66327 10.1728 9.49492 10.0682 9.39031C9.96357 9.28571 9.79521 9.28571 9.4585 9.28571"
      stroke={props.stroke ?? '#660EBA'}
      strokeWidth={props.strokeWidth ?? 1.42857}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.99425 7.14288H10.0007"
      stroke={props.stroke ?? '#660EBA'}
      strokeWidth={props.strokeWidth ?? 1.42857}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
