import Svg, { type SvgProps, Path } from 'react-native-svg';

export const UploadIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 25}
    height={props.height ?? 24}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <Path
      d="M17.9776 9.01106C17.985 9.01102 17.9925 9.01101 18 9.01101C20.4853 9.01101 22.5 11.0294 22.5 13.5193C22.5 15.8398 20.75 17.7508 18.5 18M17.9776 9.01106C17.9924 8.84606 18 8.67896 18 8.51009C18 5.46695 15.5376 3 12.5 3C9.62324 3 7.26233 5.21267 7.02042 8.03192M17.9776 9.01106C17.8753 10.1476 17.4286 11.1846 16.7428 12.0165M7.02042 8.03192C4.48398 8.27373 2.5 10.4139 2.5 13.0183C2.5 15.4417 4.21776 17.4632 6.5 17.9273M7.02042 8.03192C7.17826 8.01687 7.33823 8.00917 7.5 8.00917C8.62582 8.00917 9.66474 8.38194 10.5005 9.01101"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 13L12.5 21M12.5 13C11.7998 13 10.4915 14.9943 10 15.5M12.5 13C13.2002 13 14.5085 14.9943 15 15.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
