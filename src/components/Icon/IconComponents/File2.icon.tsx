import Svg, { type SvgProps, Path } from 'react-native-svg';

export const File2Icon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M13.3335 14.1665L7.50016 14.1665"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.3335 10.8335L10.8335 10.8335"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.0835 11.6668C17.0835 14.8095 17.0835 16.3809 16.0462 17.3572C15.0088 18.3335 13.3393 18.3335 10.0002 18.3335H9.35622C6.63855 18.3335 5.27972 18.3335 4.33605 17.6686C4.06568 17.4781 3.82565 17.2522 3.62325 16.9978C2.91683 16.1096 2.91683 14.8307 2.91683 12.2729V10.1517C2.91683 7.68237 2.91683 6.44771 3.30761 5.46162C3.93584 3.87635 5.26444 2.6259 6.9488 2.03462C7.99652 1.66683 9.30834 1.66683 11.932 1.66683C13.4312 1.66683 14.1808 1.66683 14.7795 1.877C15.742 2.21487 16.5012 2.92941 16.8602 3.83528C17.0835 4.39876 17.0835 5.10428 17.0835 6.51531V11.6668Z"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinejoin="round"
    />
    <Path
      d="M2.91667 10C2.91667 8.46588 4.16032 7.22222 5.69444 7.22222C6.24926 7.22222 6.90336 7.31944 7.4428 7.1749C7.9221 7.04647 8.29647 6.6721 8.4249 6.1928C8.56944 5.65336 8.47222 4.99926 8.47222 4.44444C8.47222 2.91032 9.71588 1.66667 11.25 1.66667"
      stroke={props.stroke ?? 'black'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
