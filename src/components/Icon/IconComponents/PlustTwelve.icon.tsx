import Svg, {
  type SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
} from 'react-native-svg';

export const PlusTwelveIcon = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <G clipPath="url(#clip0_2832_19614)">
      <Path
        d="M6.33594 11.2891H9.375V13.1562H6.33594V16.1875H4.26562V13.1562H1.22656V11.2891H4.26562V8.28125H6.33594V11.2891ZM9.82031 8.375V6.35938H14.4609V17.1094H11.9766V8.375H9.82031ZM19.8594 15.0781H24.1328V17.1094H16.4062V15.3672C16.8854 14.8932 17.5339 14.2604 18.3516 13.4688C19.1068 12.7448 19.6641 12.1927 20.0234 11.8125C20.9297 10.8854 21.3828 10.1198 21.3828 9.51562C21.3828 9.09896 21.2448 8.76562 20.9688 8.51562C20.6927 8.26042 20.3281 8.1328 19.875 8.1328C19.0417 8.1328 18.3073 8.53905 17.6719 9.35155H17.4922L16.3281 8.1328V7.94531C17.3385 6.76302 18.6328 6.17188 20.2109 6.17188C21.2682 6.17188 22.125 6.46875 22.7812 7.0625C23.4375 7.66667 23.7656 8.44531 23.7656 9.39844C23.7656 10.3724 23.3021 11.4193 22.375 12.5391C21.8802 13.1172 21.0417 13.9635 19.8594 15.0781Z"
        fill="url(#paint0_linear_2832_19614)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_2832_19614"
        x1={0.75}
        y1={7}
        x2={6.38837}
        y2={23.3371}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
      <ClipPath id="clip0_2832_19614">
        <Rect width={24} height={24} fill="white" transform="translate(0.75)" />
      </ClipPath>
    </Defs>
  </Svg>
);
