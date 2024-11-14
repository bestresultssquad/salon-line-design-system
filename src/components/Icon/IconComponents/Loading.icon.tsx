import * as React from 'react';
import Svg, { type SvgProps, Path } from 'react-native-svg';

const LoadingIconComponent = React.forwardRef<Svg, SvgProps>((props, ref) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 49 49"
    fill="none"
    ref={ref}
    {...props}
  >
    <Path
      d="M36.5019 40.5C33.159 43.0116 29.0033 44.5 24.5 44.5C13.4543 44.5 4.5 35.5457 4.5 24.5C4.5 13.4543 13.4543 4.5 24.5 4.5C35.5457 4.5 44.5 13.4543 44.5 24.5C44.5 26.2267 44.2812 27.9023 43.8698 29.5006C43.4234 31.2347 41.529 32.0401 39.8399 31.4457C38.4037 30.9403 37.7442 29.2994 38.104 27.8201C38.3628 26.7558 38.5 25.6439 38.5 24.5C38.5 16.768 32.232 10.5 24.5 10.5C16.768 10.5 10.5 16.768 10.5 24.5C10.5 32.232 16.768 38.5 24.5 38.5C27.1393 38.5 29.6081 37.7696 31.7152 36.5"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth || 2}
      strokeLinecap="round"
    />
  </Svg>
));

LoadingIconComponent.displayName = 'LoadingIconComponent';
export default LoadingIconComponent;
