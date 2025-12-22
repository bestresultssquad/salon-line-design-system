import Svg, { type SvgProps, Path } from 'react-native-svg';

export const FrameIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M21.75 5.25L12.75 14.25L9 10.5L2.25 17.25"
      stroke={props.stroke ?? '#5D0EC0'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.75 11.25V5.25H15.75"
      stroke={props.stroke ?? '#5D0EC0'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
