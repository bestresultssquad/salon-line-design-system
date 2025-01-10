import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export const ResultIcon = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
      stroke="url(#paint0_linear_2993_8535)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.5 15C16.1667 15.6667 14.9 17 12.5 17C10.1 17 8.83333 15.6667 8.5 15"
      stroke="url(#paint1_linear_2993_8535)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.92714 8.07166C6.49665 7.50215 7.42002 7.50215 7.98953 8.07166L8.41667 8.4988L8.8438 8.07166C9.41332 7.50215 10.3367 7.50215 10.9062 8.07166C11.4757 8.64118 11.4757 9.56454 10.9062 10.134L9.24162 11.7986C8.78601 12.2542 8.04732 12.2542 7.59171 11.7986L5.92714 10.134C5.35762 9.56454 5.35762 8.64118 5.92714 8.07166Z"
      fill="url(#paint2_linear_2993_8535)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0942 8.07166C14.6637 7.50215 15.587 7.50215 16.1566 8.07166L16.5837 8.4988L17.0108 8.07166C17.5803 7.50215 18.5037 7.50215 19.0732 8.07166C19.6427 8.64118 19.6427 9.56454 19.0732 10.134L17.4086 11.7986C16.953 12.2542 16.2143 12.2542 15.7587 11.7986L14.0942 10.134C13.5246 9.56454 13.5246 8.64118 14.0942 8.07166Z"
      fill="url(#paint3_linear_2993_8535)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2993_8535"
        x1={2.5}
        y1={2}
        x2={20.4634}
        y2={23.6869}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_2993_8535"
        x1={16.5}
        y1={15}
        x2={15.7739}
        y2={18.5063}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_2993_8535"
        x1={5.5}
        y1={7.64453}
        x2={9.79109}
        y2={13.7139}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_2993_8535"
        x1={13.667}
        y1={7.64453}
        x2={17.9581}
        y2={13.7139}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
    </Defs>
  </Svg>
);
