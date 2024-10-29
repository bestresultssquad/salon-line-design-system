import Svg, { type SvgProps, Path } from 'react-native-svg';
export const ChevronUpIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 15L12.5893 9.58926C12.3115 9.31148 12.1726 9.17259 12 9.17259C11.8274 9.17259 11.6885 9.31148 11.4107 9.58926L6 15"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
