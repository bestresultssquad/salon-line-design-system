import Svg, { type SvgProps, Path } from 'react-native-svg';

export const PlusIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 4V20M20 12H4"
      stroke={props.stroke || '#000'}
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default PlusIcon;
