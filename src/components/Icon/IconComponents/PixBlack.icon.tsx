import Svg, { type SvgProps, Path } from 'react-native-svg';

export const PixBlackIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M14.3502 15.0566L13.6627 15.7516H13.6349L11.7946 17.5934C10.8016 18.5804 9.20433 18.5804 8.21128 17.5934L5.69739 15.0774C6.28767 15.0357 6.85711 14.7855 7.28072 14.3616L9.78766 11.8526C9.86405 11.7761 9.98211 11.7344 10.1071 11.7344C10.2321 11.7344 10.3502 11.7761 10.4266 11.8526L12.9266 14.3546C13.3085 14.7369 13.8154 14.9871 14.3502 15.0566Z"
      stroke={props.color ?? 'black'}
      strokeWidth={1.25}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <Path
      d="M14.3363 4.94401C13.8085 5.02046 13.3085 5.26372 12.9266 5.64598L10.4266 8.14806C10.3432 8.23146 10.2321 8.28011 10.1071 8.28011C9.98211 8.28011 9.871 8.23146 9.78767 8.14806L7.28072 5.63903C6.85711 5.21507 6.28767 4.96486 5.69739 4.92316L8.21128 2.40719C9.19739 1.42026 10.8016 1.42026 11.7946 2.40719L14.3363 4.95096V4.94401Z"
      stroke={props.color ?? 'black'}
      strokeWidth={1.25}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <Path
      d="M17.5931 11.79L15.7806 13.604C15.6973 13.5832 15.6139 13.5762 15.5306 13.5762H14.6556C14.4056 13.5762 14.1556 13.472 13.975 13.2913L11.475 10.7892C11.1209 10.4347 10.6139 10.2262 10.0931 10.2262C9.82921 10.2262 9.57921 10.2749 9.3431 10.3722C9.10699 10.4695 8.89171 10.6085 8.7181 10.7822L6.21115 13.2913C6.0306 13.472 5.78754 13.5693 5.5306 13.5693H4.46115C4.38477 13.5693 4.30143 13.5832 4.22504 13.5971C3.81532 13.187 3.41254 12.7839 3.00282 12.3738L2.4056 11.7761C1.41949 10.7892 1.41949 9.1837 2.4056 8.18982L4.22504 6.36887C4.30143 6.38972 4.37782 6.39667 4.46115 6.39667H5.5306C5.78754 6.39667 6.0306 6.50092 6.21115 6.68163L8.7181 9.19065C9.08615 9.55901 9.57921 9.76057 10.1 9.76057C10.6209 9.76057 11.1139 9.55901 11.482 9.19065L13.982 6.68858C14.1625 6.50787 14.4056 6.40362 14.6625 6.40362H15.5375C15.6209 6.40362 15.6973 6.39667 15.7806 6.37582L16.4612 7.05694C16.4612 7.05694 16.482 7.07779 16.4889 7.08474L17.5931 8.18982C18.5792 9.1837 18.5792 10.7822 17.5931 11.7761V11.79Z"
      stroke={props.color ?? 'black'}
      strokeWidth={1.25}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
  </Svg>
);