import Svg, { type SvgProps, Path } from 'react-native-svg';

export const CheckoutWaitingIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 65}
    height={props.height ?? 64}
    viewBox="0 0 65 64"
    fill="none"
    {...props}
  >
    <Path
      d="M32.5 64C50.1731 64 64.5 49.6731 64.5 32C64.5 14.3269 50.1731 0 32.5 0C14.8269 0 0.5 14.3269 0.5 32C0.5 49.6731 14.8269 64 32.5 64Z"
      fill="#C4CCD5"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.5 18.2822C34.1569 18.2822 35.5 19.6254 35.5 21.2822V35.8976L40.9652 41.3639C42.1366 42.5356 42.1364 44.4351 40.9647 45.6065C39.7931 46.778 37.8936 46.7778 36.7221 45.6061L30.3799 39.2625C29.8163 38.6989 29.5 37.9347 29.5 37.1381V21.2822C29.5 19.6254 30.8431 18.2822 32.5 18.2822Z"
      fill="#050607"
    />
  </Svg>
);
