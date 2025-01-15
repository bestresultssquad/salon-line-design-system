import Svg, { type SvgProps, Path } from 'react-native-svg';

export const BarcodeIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M1.66797 3.33301V16.6663"
      stroke="#141B34"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.16797 3.33301V16.6663"
      stroke="#141B34"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.502 3.33301V16.6663"
      stroke="#141B34"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.66797 14.9997V4.99967C6.66797 4.214 6.66797 3.82116 6.91205 3.57709C7.15612 3.33301 7.54896 3.33301 8.33464 3.33301C9.12031 3.33301 9.51315 3.33301 9.75722 3.57709C10.0013 3.82116 10.0013 4.214 10.0013 4.99967V14.9997C10.0013 15.7853 10.0013 16.1782 9.75722 16.4223C9.51315 16.6663 9.12031 16.6663 8.33464 16.6663C7.54896 16.6663 7.15612 16.6663 6.91205 16.4223C6.66797 16.1782 6.66797 15.7853 6.66797 14.9997Z"
      stroke="#141B34"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.002 14.9997V4.99967C15.002 4.214 15.002 3.82116 15.246 3.57709C15.4901 3.33301 15.8829 3.33301 16.6686 3.33301C17.4543 3.33301 17.8471 3.33301 18.0912 3.57709C18.3353 3.82116 18.3353 4.214 18.3353 4.99967V14.9997C18.3353 15.7853 18.3353 16.1782 18.0912 16.4223C17.8471 16.6663 17.4543 16.6663 16.6686 16.6663C15.8829 16.6663 15.4901 16.6663 15.246 16.4223C15.002 16.1782 15.002 15.7853 15.002 14.9997Z"
      stroke="#141B34"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
