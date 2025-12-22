import Svg, { type SvgProps, Path } from 'react-native-svg';

export const TiktokMigsIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
      stroke={props.stroke ?? '#5D0EC0'}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M17.5 9.5C13.5 9.5 13.5 6 13.5 6V14.5C13.5 14.5 13.5 18 10 18C8 18 6.50916 16.433 6.5 14.5C6.5 11 10 10.5 11 11.5"
      stroke={props.stroke ?? '#5D0EC0'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
