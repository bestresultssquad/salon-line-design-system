import Svg, { type SvgProps, Path } from 'react-native-svg';

export const CreditCardIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M1.99995 11.9996C1.99995 8.46215 1.99995 6.69341 3.05275 5.51253C3.22114 5.32366 3.40673 5.14899 3.60741 4.9905C4.86208 3.99963 6.74137 3.99963 10.5 3.99963H13.5C17.2585 3.99963 19.1378 3.99963 20.3925 4.9905C20.5932 5.14899 20.7788 5.32366 20.9472 5.51253C22 6.69341 22 8.46215 22 11.9996C22 15.5371 22 17.3059 20.9472 18.4867C20.7788 18.6756 20.5932 18.8503 20.3925 19.0088C19.1378 19.9996 17.2585 19.9996 13.5 19.9996H10.5C6.74137 19.9996 4.86208 19.9996 3.60741 19.0088C3.40673 18.8503 3.22114 18.6756 3.05275 18.4867C1.99995 17.3059 1.99995 15.5371 1.99995 11.9996Z"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth || 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 15.9996H11.5"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth || 1.25}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.5 15.9996L18 15.9996"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth || 1.25}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 8.99963H22"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth || 1.25}
      strokeLinejoin="round"
    />
  </Svg>
);
