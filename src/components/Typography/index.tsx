import { TypographyContainer } from './Typography.styles';
import type { Props } from './Typography.types';

const Typography = ({ style, children, variant, color, ...props }: Props) => {
  return (
    <TypographyContainer
      {...props}
      style={[{ textAlignVertical: 'center' }, style]}
      {...{ variant, color }}
    >
      {children}
    </TypographyContainer>
  );
};

export default Typography;
