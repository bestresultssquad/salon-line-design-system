import Svg, { type SvgProps, Path } from 'react-native-svg';
export const TermsIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.5 9.99999C3.5 6.22875 3.5 4.34313 4.7448 3.17156C5.98959 1.99998 7.99306 1.99998 12 1.99998H12.7727C16.0339 1.99998 17.6645 1.99998 18.7969 2.79782C19.1214 3.02641 19.4094 3.29751 19.6523 3.60287C20.5 4.66866 20.5 6.20334 20.5 9.27271V11.8182C20.5 14.7813 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3423 4.19875 20.4849 3.76796 19.3978C3.5 18.7217 3.5 17.875 3.5 16.1818V9.99999Z"
      stroke={props.stroke ?? '#000'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinejoin="round"
    />
    <Path
      d="M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.2159 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22"
      stroke={props.stroke ?? '#000'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 6.99998H15"
      stroke={props.stroke ?? '#000'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 11H11"
      stroke={props.stroke ?? '#000'}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
