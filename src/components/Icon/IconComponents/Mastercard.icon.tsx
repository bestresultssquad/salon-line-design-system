import Svg, { type SvgProps, Path } from 'react-native-svg';
export const MastercardIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path d="M9.89551 8.16943H14.1844V15.863H9.89551V8.16943Z" fill="#FF5F00" />
    <Path
      d="M10.1546 12.016C10.1546 10.4528 10.8898 9.06633 12.0199 8.1692C11.1893 7.51675 10.141 7.12256 8.99726 7.12256C6.28779 7.12256 4.0957 9.311 4.0957 12.016C4.0957 14.7209 6.28779 16.9094 8.99726 16.9094C10.141 16.9094 11.1893 16.5152 12.0199 15.8627C10.8898 14.9792 10.1546 13.5791 10.1546 12.016Z"
      fill="#EB001B"
    />
    <Path
      d="M19.9574 12.016C19.9574 14.7209 17.7653 16.9094 15.0558 16.9094C13.9121 16.9094 12.8637 16.5152 12.0332 15.8627C13.1769 14.9656 13.8985 13.5791 13.8985 12.016C13.8985 10.4528 13.1633 9.06633 12.0332 8.1692C12.8637 7.51675 13.9121 7.12256 15.0558 7.12256C17.7653 7.12256 19.9574 9.32459 19.9574 12.016Z"
      fill="#F79E1B"
    />
  </Svg>
);
