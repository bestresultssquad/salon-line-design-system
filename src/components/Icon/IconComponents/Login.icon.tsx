import Svg, { type SvgProps, Path } from "react-native-svg";

export const LoginIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M10 3.09502C10.457 3.03241 10.9245 3 11.4 3C16.7019 3 21 7.02944 21 12C21 16.9706 16.7019 21 11.4 21C10.9245 21 10.457 20.9676 10 20.905"
      stroke={props.stroke ?? "#660EBA"}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10.5 14.5C11.0057 14.0085 13 12.7002 13 12M10.5 9.5C11.0057 9.99153 13 11.2998 13 12M13 12L3 12"
      stroke={props.stroke ?? "#660EBA"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);