import Svg, { type SvgProps, Path } from 'react-native-svg';
export const BubbleChatIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 11.5667C22 16.8498 17.5222 21.1334 12 21.1334C11.3507 21.1342 10.7032 21.0742 10.0654 20.9544C9.60631 20.8682 9.37677 20.8251 9.21651 20.8496C9.05626 20.8741 8.82916 20.9948 8.37497 21.2364C7.09012 21.9197 5.59194 22.161 4.1511 21.893C4.69873 21.2194 5.07273 20.4112 5.23776 19.5448C5.33776 19.0148 5.08998 18.5 4.71887 18.1231C3.03332 16.4115 1.99998 14.1051 1.99998 11.5667C1.99998 6.28355 6.47776 1.99998 12 1.99998C17.5222 1.99998 22 6.28355 22 11.5667Z"
      stroke={props.stroke ?? '#000#'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M9.99998 9.84615C9.99998 8.82655 10.8954 8 12 8C13.1046 8 14 8.82655 14 9.84615C14 10.2137 13.8836 10.5561 13.6831 10.8438C13.0854 11.7012 12 12.5189 12 13.5385V14"
      stroke={props.stroke ?? '#000#'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 16.5H12.009"
      stroke={props.stroke ?? '#000#'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
