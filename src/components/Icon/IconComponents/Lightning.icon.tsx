import Svg, { Path, type SvgProps } from 'react-native-svg';

export const LightningIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M6 12L10.9947 2H16.4127L13.3651 8.05263L17.4286 9.45614L9.13228 22L9.97884 13.7544L6 12Z"
      fill="#FDE047"
    />
  </Svg>
);
