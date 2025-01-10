import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export const MelonIcon = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M19.4998 13.577C17.975 15.1527 14.9909 16.457 12.4998 16.457C10.0088 16.457 7.02464 15.1527 5.49983 13.577M12.4998 8.77697V9.73695M10.4998 11.657V12.617M14.4998 11.657V12.617M21.7515 17.3546C19.9531 18.933 15.8713 20.297 12.4998 20.297C9.12841 20.297 5.04659 18.933 3.2482 17.3546C2.70143 16.8748 2.76915 16.095 3.19974 15.5163L12.093 3.5638C12.2924 3.29579 12.7073 3.29579 12.9067 3.5638L21.7999 15.5163C22.2305 16.095 22.2982 16.8748 21.7515 17.3546Z"
      stroke="url(#paint0_linear_2832_19709)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2832_19709"
        x1={2.85742}
        y1={3.36279}
        x2={17.5851}
        y2={23.6115}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
    </Defs>
  </Svg>
);
