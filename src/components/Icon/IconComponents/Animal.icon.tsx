import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export const AnimalIcon = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M9.58826 13.4999C9.43796 13.694 9.29454 13.9114 9.15911 14.1543C9.03743 14.3726 8.85155 14.544 8.63449 14.6562C5.26482 16.3977 6.27372 22.7003 12.49 20.6168C12.701 20.546 12.9396 20.546 13.1507 20.6168C19.367 22.7003 20.3758 16.3977 17.0061 14.6562C16.7891 14.544 16.6031 14.3724 16.4814 14.1541C15.5265 12.4414 14.1734 11.9999 12.8203 11.9999C12.6601 11.9999 12.4999 12.0061 12.3404 12.0199M9.58826 13.4999C8.32531 11.3414 6.24453 6.58714 7.23674 3.67021C7.37814 3.25451 7.82599 3.07093 8.19427 3.28849C9.59156 4.11393 11.6861 6.58072 12.3404 12.0199M9.58826 13.4999C10.3723 12.4872 11.3435 12.1058 12.3404 12.0199M16.0524 13.4999C17.3153 11.3414 19.3961 6.58713 18.4039 3.6702C18.2625 3.2545 17.8146 3.07092 17.4464 3.28848C16.0491 4.11391 13.9546 6.58071 13.3002 12.0198C14.2972 12.1058 15.2683 12.4871 16.0524 13.4999Z"
      stroke="url(#paint0_linear_2832_19587)"
      strokeWidth={1.5}
    />
    <Path
      d="M14.4995 16C14.4995 16.2761 14.3921 16.5 14.2595 16.5C14.127 16.5 14.0195 16.2761 14.0195 16C14.0195 15.7239 14.127 15.5 14.2595 15.5C14.3921 15.5 14.4995 15.7239 14.4995 16Z"
      stroke="url(#paint1_linear_2832_19587)"
    />
    <Path
      d="M11.6196 16C11.6196 16.2761 11.5122 16.5 11.3796 16.5C11.2471 16.5 11.1396 16.2761 11.1396 16C11.1396 15.7239 11.2471 15.5 11.3796 15.5C11.5122 15.5 11.6196 15.7239 11.6196 16Z"
      stroke="url(#paint2_linear_2832_19587)"
    />
    <Path
      d="M13.2716 18.5H12.3682C12.2416 18.5 12.2013 18.6778 12.3146 18.7368L12.7662 18.972C12.8 18.9896 12.8398 18.9896 12.8736 18.972L13.3253 18.7368C13.4385 18.6778 13.3982 18.5 13.2716 18.5Z"
      stroke="url(#paint3_linear_2832_19587)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2832_19587"
        x1={6.73437}
        y1={2.99992}
        x2={22.8808}
        y2={16.1566}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_2832_19587"
        x1={11.1395}
        y1={15.5}
        x2={14.2893}
        y2={19.1659}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_2832_19587"
        x1={11.1396}
        y1={15.5}
        x2={14.2894}
        y2={19.1659}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_2832_19587"
        x1={11.1399}
        y1={15.5}
        x2={14.2897}
        y2={19.1659}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
    </Defs>
  </Svg>
);
