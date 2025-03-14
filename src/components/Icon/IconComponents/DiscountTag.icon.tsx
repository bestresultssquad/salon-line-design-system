import Svg, { type SvgProps, Path } from 'react-native-svg';

export const DiscountTagIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15.1307 6.14522L14.7407 6.10524C13.7607 5.99528 13.2706 5.9453 12.8206 6.10524C12.3706 6.26518 12.0206 6.61504 11.3205 7.30477L6.09026 12.5327C4.70019 13.9222 4.00015 14.6219 4.00015 15.4816C4.00015 16.3413 4.70019 17.041 6.09026 18.4305L7.57034 19.9099C8.96041 21.2994 9.66044 21.9991 10.5205 21.9991C11.3805 21.9991 12.0806 21.2994 13.4706 19.9099L18.7009 14.6819C19.4009 13.9822 19.751 13.6323 19.901 13.1825C20.061 12.7327 20.001 12.2429 19.901 11.2632L19.751 9.93376C19.571 8.34437 19.481 7.54468 18.9709 7.02488C18.7109 6.76498 18.3909 6.61504 17.9409 6.51508"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth || 1.25}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <Path
      d="M7.01031 3.69535C9.79046 6.77416 14.3807 0.126735 17.0908 2.5358C18.6509 3.92526 18.1609 6.99408 16.1308 8.9933"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth || 1.25}
      strokeLinecap="round"
    />
    <Path
      d="M8.26176 15.2411H13.262M10.7605 12.7421H10.7698M10.7628 17.7401H10.7721"
      stroke={props.stroke || '#000'}
      strokeWidth={props.strokeWidth || 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
