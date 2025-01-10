import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export const NoChildsIcon = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M12.5 5.22055C11 5.22055 10 5.50001 8.49996 6.50001C6.82519 7.83821 6.19441 8.84521 5.49996 11C5.49996 11 4 11.5 4 13C4 14.5 5.99996 15 5.99996 15C5.99996 15 6.31073 15.7077 7.20835 16.5C8.10597 17.2923 9.5 19 12.5 19C15.5 19 16.8376 17.3421 17.7916 16.5C18.7457 15.6579 19 15 19 15C19 15 21 14.5 21 13C21 11.5 19.5 11 19.5 11C19.0398 9.57191 18.6075 8.64797 17.8807 7.79764M12.5 5.22055C13.1667 4.8137 14.1 3.7 12.5 2.5M12.5 5.22055C13.7885 5.22055 14.6607 5.53974 15.8725 6.16655M14.5 14C14.3977 14.1534 14.2849 14.2912 14.1639 14.4132C13.2644 15.3199 11.9057 15.3604 10.9652 14.5347M10.9652 14.5347L5.49996 20M10.9652 14.5347L20.5 4.99996"
      stroke="url(#paint0_linear_2993_8464)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.25 11.25C11.25 11.6642 10.9142 12 10.5 12C10.0858 12 9.75 11.6642 9.75 11.25C9.75 10.8358 10.0858 10.5 10.5 10.5C10.9142 10.5 11.25 10.8358 11.25 11.25Z"
      fill="url(#paint1_linear_2993_8464)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2993_8464"
        x1={4}
        y1={2.5}
        x2={19.7966}
        y2={21.0261}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_2993_8464"
        x1={9.75}
        y1={10.5}
        x2={11.0973}
        y2={12.1265}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
    </Defs>
  </Svg>
);
