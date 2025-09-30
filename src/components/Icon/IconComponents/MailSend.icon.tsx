import Svg, { type SvgProps, Path } from "react-native-svg";

export const MailSendIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M18.3334 10.4167C18.3334 10.0072 18.329 9.18099 18.3203 8.77029C18.2658 6.21568 18.2386 4.93837 17.296 3.99218C16.3534 3.04599 15.0415 3.01302 12.4177 2.9471C10.8007 2.90647 9.1995 2.90647 7.58243 2.94709C4.95869 3.01301 3.64682 3.04597 2.70421 3.99217C1.7616 4.93836 1.73436 6.21566 1.67989 8.77027C1.66237 9.59168 1.66237 10.4082 1.67989 11.2296C1.73437 13.7843 1.76161 15.0616 2.70421 16.0078C3.64682 16.9539 4.95869 16.9869 7.58244 17.0528C8.2514 17.0696 8.91764 17.0795 9.58341 17.0824"
      stroke={props.stroke ?? "#660EBA"}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.66675 5L7.4276 8.27052C9.5323 9.46538 10.4679 9.46538 12.5726 8.27052L18.3334 5"
      stroke={props.stroke ?? "#660EBA"}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinejoin="round"
    />
    <Path
      d="M18.3334 14.5833L11.6667 14.5833M18.3334 14.5833C18.3334 13.9998 16.6715 12.9096 16.2501 12.5M18.3334 14.5833C18.3334 15.1669 16.6715 16.2571 16.2501 16.6667"
      stroke={props.stroke ?? "#660EBA"}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
