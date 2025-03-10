import Svg, {
  type SvgProps,
  G,
  Path,
  Defs,
  ClipPath,
  Rect,
} from 'react-native-svg';
export const ReloadIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 25}
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_713_28402)">
      <Path
        d="M15.1667 1.47363L15.7646 2.5914C16.1689 3.3471 16.371 3.72494 16.2374 3.88676C16.1037 4.04859 15.6635 3.91789 14.7831 3.65651C13.9029 3.39519 12.9684 3.25459 12 3.25459C6.75329 3.25459 2.5 7.38209 2.5 12.4736C2.5 14.1528 2.96262 15.7272 3.77093 17.0832M8.83333 23.4736L8.23536 22.3559C7.83108 21.6002 7.62894 21.2223 7.7626 21.0605C7.89627 20.8987 8.33649 21.0294 9.21689 21.2908C10.0971 21.5521 11.0316 21.6927 12 21.6927C17.2467 21.6927 21.5 17.5652 21.5 12.4736C21.5 10.7944 21.0374 9.22011 20.2291 7.86411"
        stroke="black"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_713_28402">
        <Rect
          width={24}
          height={24}
          fill="white"
          transform="translate(0 0.473633)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
