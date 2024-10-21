import Svg, { type SvgProps, Circle, Path } from 'react-native-svg';

export const PlayCircleIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={12}
      cy={12}
      r={10}
      stroke={props.stroke ?? '#000'}
      strokeWidth={props.strokeWidth ?? 1.25}
    />
    <Path
      d="M15.4531 12.3947C15.3016 13.0214 14.5857 13.4643 13.1539 14.35C11.7697 15.2063 11.0777 15.6344 10.5199 15.4623C10.2893 15.3912 10.0793 15.2561 9.90982 15.0699C9.5 14.6197 9.5 13.7464 9.5 11.9999C9.5 10.2533 9.5 9.38006 9.90982 8.92983C10.0793 8.74369 10.2893 8.60856 10.5199 8.53741C11.0777 8.36531 11.7697 8.79345 13.1539 9.64971C14.5857 10.5355 15.3016 10.9783 15.4531 11.6051C15.5156 11.8638 15.5156 12.136 15.4531 12.3947Z"
      stroke={props.stroke ?? '#000'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinejoin="round"
    />
  </Svg>
);
