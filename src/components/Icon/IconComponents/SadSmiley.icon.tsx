import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export const SadSmileyIcon = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M8.65226 9.19583H9.04357M8.65226 9.58714H9.04357M15.9566 9.19583H16.3479M15.9566 9.58714H16.3479M16.6741 16.1741C16.3263 15.4784 15.0046 14.0872 12.5002 14.0872C9.99586 14.0872 8.67412 15.4784 8.3263 16.1741M22.935 12.0002C22.935 17.7631 18.2631 22.435 12.5002 22.435C6.73724 22.435 2.06543 17.7631 2.06543 12.0002C2.06543 6.23724 6.73724 1.56543 12.5002 1.56543C18.2631 1.56543 22.935 6.23724 22.935 12.0002ZM9.36978 9.39152C9.36978 9.67966 9.13618 9.91326 8.84804 9.91326C8.55989 9.91326 8.3263 9.67966 8.3263 9.39152C8.3263 9.10337 8.55989 8.86978 8.84804 8.86978C9.13618 8.86978 9.36978 9.10337 9.36978 9.39152ZM16.6741 9.39152C16.6741 9.67966 16.4405 9.91326 16.1524 9.91326C15.8643 9.91326 15.6306 9.67966 15.6306 9.39152C15.6306 9.10337 15.8643 8.86978 16.1524 8.86978C16.4405 8.86978 16.6741 9.10337 16.6741 9.39152Z"
      stroke="url(#paint0_linear_2832_19466)"
      strokeWidth={1.56522}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2832_19466"
        x1={2.06543}
        y1={15.9302}
        x2={4.94396}
        y2={27.0799}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B14FC5" />
        <Stop offset={1} stopColor="#FF4713" />
      </LinearGradient>
    </Defs>
  </Svg>
);
