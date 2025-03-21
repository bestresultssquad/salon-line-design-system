import * as React from 'react';
import Svg, { type SvgProps, Path } from 'react-native-svg';

const LoadingIconComponent = React.forwardRef<Svg, SvgProps>((props, ref) => (
  <Svg
    width={props.width ?? 33}
    height={props.height ?? 33}
    viewBox="0 0 33 33"
    fill="none"
    ref={ref}
    {...props}
  >
    <Path
      d="M3.16669 16.4998C3.16669 23.8636 9.13622 29.8332 16.5 29.8332C18.5521 29.8332 20.4958 29.3696 22.2323 28.5415C23.4577 27.9571 23.5039 26.333 22.4621 25.4624C21.7727 24.8864 20.8016 24.8339 19.9676 25.1678C18.8955 25.597 17.7254 25.8332 16.5 25.8332C11.3454 25.8332 7.16669 21.6545 7.16669 16.4998C7.16669 11.3452 11.3454 7.1665 16.5 7.1665C21.6547 7.1665 25.8334 11.3452 25.8334 16.4998C25.8334 17.2625 25.7419 18.0037 25.5693 18.7132C25.3295 19.6995 25.7692 20.7933 26.7266 21.1303C27.8527 21.5266 29.1156 20.9896 29.4132 19.8335C29.6875 18.768 29.8334 17.651 29.8334 16.4998C29.8334 9.13604 23.8638 3.1665 16.5 3.1665C9.13622 3.1665 3.16669 9.13604 3.16669 16.4998Z"
      fill={props.fill ?? '#BE185D'}
    />
  </Svg>
));

LoadingIconComponent.displayName = 'LoadingIconComponent';
export default LoadingIconComponent;
