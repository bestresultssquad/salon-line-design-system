import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export const ArrowUpDownIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M7 5V20"
      stroke={props.stroke || 'black'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 19L17 4"
      stroke={props.stroke || 'black'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 7L6.29289 4.53708C6.62623 4.17903 6.79289 4 7 4C7.20711 4 7.37377 4.17903 7.70711 4.53708L10 7"
      stroke={props.stroke || 'black'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 17L16.2929 19.4629C16.6262 19.821 16.7929 20 17 20C17.2071 20 17.3738 19.821 17.7071 19.4629L20 17"
      stroke={props.stroke || 'black'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
