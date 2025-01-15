import Svg, { type SvgProps, Path } from 'react-native-svg';

export const MegaphoneIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M12.4385 2.42618L6.8946 5.08743C6.46792 5.29224 6.01203 5.34355 5.54729 5.23944C5.24314 5.1713 5.09105 5.13723 4.96859 5.12325C3.44786 4.94959 2.5 6.15318 2.5 7.53721V8.29677C2.5 9.68081 3.44786 10.8844 4.96859 10.7107C5.09105 10.6968 5.24315 10.6627 5.54729 10.5945C6.01203 10.4904 6.46793 10.5417 6.8946 10.7466L12.4385 13.4078C13.7112 14.0187 14.3475 14.3242 15.057 14.0861C15.7664 13.848 16.01 13.3371 16.497 12.3154C17.8343 9.50962 17.8343 6.32436 16.497 3.51863C16.01 2.49687 15.7664 1.986 15.057 1.74791C14.3475 1.50982 13.7112 1.81528 12.4385 2.42618Z"
      stroke={props.stroke || 'black'}
      strokeWidth={props.strokeWidth || 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.54805 17.3097L8.30529 18.334C5.50397 16.1122 5.8462 15.0527 5.8462 10.834H6.79105C7.17449 13.2181 8.07894 14.3473 9.32696 15.1648C10.0957 15.6684 10.2542 16.7277 9.54805 17.3097Z"
      stroke={props.stroke || 'black'}
      strokeWidth={props.strokeWidth || 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.25 10.417V5.41699"
      stroke={props.stroke || 'black'}
      strokeWidth={props.strokeWidth || 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
