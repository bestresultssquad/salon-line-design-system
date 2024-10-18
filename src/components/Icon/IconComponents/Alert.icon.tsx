import Svg, { type SvgProps, Path } from 'react-native-svg';
export const AlertIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5.32168 9.6829C7.73535 5.41196 8.94219 3.27648 10.5982 2.72678C11.5093 2.42437 12.4907 2.42437 13.4017 2.72678C15.0577 3.27648 16.2646 5.41196 18.6783 9.6829C21.0919 13.9538 22.2988 16.0893 21.9367 17.8293C21.7376 18.7866 21.2469 19.6548 20.535 20.3097C19.241 21.5 16.8273 21.5 12 21.5C7.17262 21.5 4.75894 21.5 3.46493 20.3097C2.75305 19.6548 2.26236 18.7866 2.06319 17.8293C1.70116 16.0893 2.908 13.9538 5.32168 9.6829Z"
      stroke={props.stroke || '#000'}
      strokeWidth={1.25}
    />
    <Path
      d="M11.992 16H12.001"
      stroke={props.stroke || '#000'}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 13L12 8.99997"
      stroke={props.stroke || '#000'}
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
