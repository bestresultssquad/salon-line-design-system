import Svg, { type SvgProps, Path } from 'react-native-svg';

export const CarouselHorizontalIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7 8.00024C7 5.64322 7 4.46471 7.73223 3.73248C8.46447 3.00024 9.64298 3.00024 12 3.00024C14.357 3.00024 15.5355 3.00024 16.2678 3.73248C17 4.46471 17 5.64322 17 8.00024V16.0002C17 18.3573 17 19.5358 16.2678 20.268C15.5355 21.0002 14.357 21.0002 12 21.0002C9.64298 21.0002 8.46447 21.0002 7.73223 20.268C7 19.5358 7 18.3573 7 16.0002V8.00024Z"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 7.00024C2.54697 7.10474 2.94952 7.28956 3.26777 7.61646C4 8.3686 4 9.57915 4 12.0002C4 14.4213 4 15.6319 3.26777 16.384C2.94952 16.7109 2.54697 16.8958 2 17.0002"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 7.00024C21.453 7.10474 21.0505 7.28956 20.7322 7.61646C20 8.3686 20 9.57915 20 12.0002C20 14.4213 20 15.6319 20.7322 16.384C21.0505 16.7109 21.453 16.8958 22 17.0002"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
