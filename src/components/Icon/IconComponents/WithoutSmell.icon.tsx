import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export const WithoutSmell = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M18.7785 7C20.2816 7 21.5 8.11929 21.5 9.5C21.5 10.8807 20.2816 12 18.7785 12H3.5"
      stroke="url(#paint0_linear_2993_8486)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.4375 20C19.5766 20 21 19.5 21 17.5C21 15.5 19.5766 15 18.4375 15H3.5"
      stroke="url(#paint1_linear_2993_8486)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.9118 4C12.3412 4 13.5 5.11929 13.5 6.5C13.5 7.88071 12.3412 9 10.9118 9H3.5"
      stroke="url(#paint2_linear_2993_8486)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.5 20L10.9653 14.5348L20.5 5"
      stroke="url(#paint3_linear_2993_8486)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2993_8486"
        x1={3.5}
        y1={7}
        x2={5.49757}
        y2={15.6819}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_2993_8486"
        x1={3.5}
        y1={15}
        x2={5.54868}
        y2={23.6567}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_2993_8486"
        x1={3.5}
        y1={4}
        x2={6.73168}
        y2={11.8031}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_2993_8486"
        x1={5.5}
        y1={5}
        x2={18.9726}
        y2={21.2652}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
    </Defs>
  </Svg>
);
