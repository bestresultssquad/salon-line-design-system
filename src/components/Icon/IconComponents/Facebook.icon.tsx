import Svg, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
  type SvgProps,
} from 'react-native-svg';
export const FacebookIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 21}
    height={props.height ?? 20}
    viewBox="0 0 21 20"
    fill="none"
  >
    <G clipPath="url(#clip0_6969_2934)">
      <Path
        d="M8.975 19.9C4.225 19.05 0.625 14.95 0.625 10C0.625 4.5 5.125 0 10.625 0C16.125 0 20.625 4.5 20.625 10C20.625 14.95 17.025 19.05 12.275 19.9L11.725 19.45H9.525L8.975 19.9Z"
        fill="url(#paint0_linear_6969_2934)"
      />
      <Path
        d="M14.5249 12.8L14.9749 9.99999H12.3249V8.04999C12.3249 7.24999 12.6249 6.64999 13.8249 6.64999H15.1249V4.09999C14.4249 3.99999 13.6249 3.89999 12.9249 3.89999C10.6249 3.89999 9.0249 5.29999 9.0249 7.79999V9.99999H6.5249V12.8H9.0249V19.85C9.5749 19.95 10.1249 20 10.6749 20C11.2249 20 11.7749 19.95 12.3249 19.85V12.8H14.5249Z"
        fill="white"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_6969_2934"
        x1={10.6255}
        y1={19.3045}
        x2={10.6255}
        y2={-0.00368389}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0062E0" />
        <Stop offset={1} stopColor="#0062E0" />
      </LinearGradient>
      <ClipPath id="clip0_6969_2934">
        <Rect
          width={20}
          height={20}
          fill="white"
          transform="translate(0.625)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
