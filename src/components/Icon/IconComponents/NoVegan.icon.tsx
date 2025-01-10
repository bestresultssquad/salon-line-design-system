import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export const NoVeganIcon = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M4.5 19.9999C4.7963 18.074 6.81111 13.7777 12.5 11.9999M9.5 18.3743C10.9425 19.101 13.4582 19.5329 15.974 17.7067C20.4028 14.4916 20.8861 8.34084 20.2976 4.72059C20.241 4.37251 19.8452 4.21686 19.555 4.41727C18.3519 5.24815 17.0291 6.07022 14.5 5.99993C12.2604 5.93769 9.89681 5.6368 8 6.99993C5.76335 8.60728 5.36429 10.3665 5.5599 11.9999C5.68458 12.5665 6.13189 13.7591 7 14.5954"
      stroke="url(#paint0_linear_2832_19896)"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22.2596 21.5999L12.6596 11.9999L3.05957 2.3999"
      stroke="url(#paint1_linear_2832_19896)"
      strokeWidth={1.44}
      strokeLinecap="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2832_19896"
        x1={4.5}
        y1={4.32861}
        x2={18.5183}
        y2={21.6077}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_2832_19896"
        x1={3.05957}
        y1={2.3999}
        x2={20.3044}
        y2={23.2193}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
    </Defs>
  </Svg>
);
