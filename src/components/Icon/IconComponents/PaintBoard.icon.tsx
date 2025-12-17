import Svg, { type SvgProps, Path, Circle } from 'react-native-svg';

export const PaintBoardIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39759 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333C10.7018 18.3333 11.667 18.4302 11.667 17.5C11.667 16.9925 11.403 16.6009 11.1408 16.212C10.7572 15.6429 10.3773 15.0794 10.8337 14.1666C11.3892 13.0555 12.3152 13.0555 13.7349 13.0555C14.4448 13.0555 15.2781 13.0555 16.2504 12.9166C18.0012 12.6665 18.3337 11.5903 18.3337 9.99996Z"
      stroke={props.stroke || 'black'}
      strokeWidth={1.25}
    />
    <Path
      d="M5.83398 12.502L5.84121 12.5"
      stroke={props.stroke || 'black'}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx={7.91699}
      cy={7.08325}
      r={1.25}
      stroke={props.stroke || 'black'}
      strokeWidth={1.25}
    />
    <Circle
      cx={13.75}
      cy={7.91663}
      r={1.25}
      stroke={props.stroke || 'black'}
      strokeWidth={1.25}
    />
  </Svg>
);
