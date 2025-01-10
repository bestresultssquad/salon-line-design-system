import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export const AllWashesIcon = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M18.5004 9.31404C18.7209 10.2839 17.8859 11.1 16.8817 11.1H4.15429C3.15012 11.1 2.31516 10.2839 2.53562 9.31404C2.59858 9.03706 2.67588 8.76544 2.76669 8.5M18.5004 9.31404L22.5 9.3M18.5004 9.31404C18.4374 9.03706 18.3601 8.76544 18.2693 8.5M2.76669 8.5C2.88449 8.15569 3.02504 7.82178 3.18656 7.5C4.5254 4.83291 7.30549 3 10.518 3C13.3548 3 15.8544 4.42923 17.3221 6.6M2.76669 8.5H18.2693M18.2693 8.5C18.0373 7.82191 17.7171 7.18411 17.3221 6.6M8.6998 11.1V12.9M12.3362 11.1V18.075M15.9726 11.1V15.6M5.06339 11.1V14.7M8.69981 15.6V17.4M5.0634 17.4V20.1M15.9726 18.3V20.1M8.69981 20.1V21M12.3362 20.775V21M17.3221 6.6H22.5"
      stroke="url(#paint0_linear_2993_8517)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2993_8517"
        x1={2.5}
        y1={3}
        x2={18.2695}
        y2={24.1537}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
    </Defs>
  </Svg>
);
