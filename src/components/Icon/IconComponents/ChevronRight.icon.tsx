import Svg, { type SvgProps, Path } from 'react-native-svg';

export const ChevronRightIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9 18L14.2929 12.7071C14.6262 12.3738 14.7929 12.2071 14.7929 12C14.7929 11.7929 14.6262 11.6262 14.2929 11.2929L9 6"
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
      stroke={props.stroke || '#000'}
      strokeLinejoin="round"
    />
  </Svg>
);
