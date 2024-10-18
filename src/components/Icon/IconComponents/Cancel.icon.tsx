import Svg, { type SvgProps, Path } from 'react-native-svg';

export const CancelIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M15.8338 4.16656L4.16711 15.8332M4.16711 4.16656L15.8338 15.8332"
      strokeWidth={1.25}
      stroke={props.stroke || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CancelIcon;
