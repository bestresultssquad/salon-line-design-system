import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export const Hairt2Icon = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M7.61972 5.14423C10.5778 2.09201 14.5382 3.10456 15.7945 5.52779C18.1006 5.86774 19.089 7.93569 19.0889 8.92718V15.726C19.1094 16.8736 19.7146 18.7353 21.9716 17.0008C21.9716 17.0008 22.4909 20.75 19.0889 20.75C15.687 20.75 15.7945 17.8921 15.7945 15.726V10.6269C14.4767 10.2869 13.8727 9.06882 13.7354 8.50225C12.7471 10.202 10.3037 10.6269 9.20551 10.6269V15.726C9.20551 17.8921 9.31299 20.75 5.91107 20.75C2.50914 20.75 3.0284 17.0008 3.0284 17.0008C5.28543 18.7353 5.89061 16.8736 5.91107 15.726V10.6269C5.91107 8.2473 6.39039 6.41271 7.61972 5.14423Z"
      stroke="url(#paint0_linear_2832_19689)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2832_19689"
        x1={3}
        y1={3.25}
        x2={18.4293}
        y2={23.4742}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
    </Defs>
  </Svg>
);
