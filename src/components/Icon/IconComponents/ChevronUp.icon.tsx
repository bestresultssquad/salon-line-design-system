import Svg, { type SvgProps, Path } from 'react-native-svg';
export const ChevronUpIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,0,0)"
    {...props}
  >
    <Path
      d="M17.9985 9L12.7056 14.2929C12.3723 14.6262 12.2056 14.7929 11.9985 14.7929C11.7914 14.7929 11.6248 14.6262 11.2914 14.2929L5.99854 9"
      stroke={props.stroke || '#000'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
