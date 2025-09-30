import Svg, { type SvgProps, Path } from "react-native-svg";

export const LegalDocumentIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 21}
    height={props.height ?? 20}
    viewBox="0 0 21 20"
    fill="none"
    {...props}
  >
    <Path
      d="M3 11.6667V8.33333C3 5.19063 3 3.61929 3.97631 2.64297C4.95262 1.66666 6.52397 1.66666 9.66667 1.66666H11.3333C14.476 1.66666 16.0474 1.66666 17.0237 2.64297C18 3.61929 18 5.19063 18 8.33333V11.6667C18 14.8094 18 16.3807 17.0237 17.357C16.0474 18.3333 14.476 18.3333 11.3333 18.3333H9.66667C6.52397 18.3333 4.95262 18.3333 3.97631 17.357C3 16.3807 3 14.8094 3 11.6667Z"
      stroke={props.stroke ?? "#660EBA"}
      strokeWidth={props.strokeWidth ?? 1.25}
    />
    <Path
      d="M9.9444 8.88889C10.8235 9.76801 11.9814 10.6614 11.9814 10.6614L13.5687 9.07407C13.5687 9.07407 12.6754 7.91616 11.7963 7.03704C10.9171 6.15792 9.75922 5.26455 9.75922 5.26455L8.17192 6.85185C8.17192 6.85185 9.06528 8.00977 9.9444 8.88889ZM9.9444 8.88889L7.16663 11.6667M13.8333 8.80952L11.7169 10.9259M10.0238 5L7.90737 7.1164"
      stroke={props.stroke ?? "#660EBA"}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.16663 15H13.8333"
      stroke={props.stroke ?? "#660EBA"}
      strokeWidth={props.strokeWidth ?? 1.25}
      strokeLinecap="round"
    />
  </Svg>
);