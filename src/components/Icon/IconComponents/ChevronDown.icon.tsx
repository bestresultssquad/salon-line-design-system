import Svg, { Path, type SvgProps } from 'react-native-svg';

export const ChevronDownIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17.9986 9L12.7057 14.2929C12.3723 14.6262 12.2057 14.7929 11.9986 14.7929C11.7915 14.7929 11.6248 14.6262 11.2915 14.2929L5.99857 9"
      stroke={props.stroke || '#000'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
