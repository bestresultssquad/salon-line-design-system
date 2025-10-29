import { useTheme } from 'styled-components/native';
import Typography from '../Typography';
import { Container } from './SectionTitle.styles';
import type { Props } from './SectionTitle.types';
import { TouchableOpacity } from 'react-native';

const SectionTitle = ({ linkOnPress, linkText, title, ...props }: Props) => {
  const { baseColors } = useTheme();
  return (
    <Container {...props}>
      <Typography
        sizeVariant={'semiBold'}
        variant={'sm'}
        color={baseColors.black}
        numberOfLines={2}
        style={{ maxWidth: '80%' }}
      >
        {title}
      </Typography>
      <TouchableOpacity onPress={linkOnPress}>
        <Typography
          sizeVariant={'medium'}
          variant={'sm'}
          color={baseColors.gray[600]}
          style={{ textDecorationLine: 'underline' }}
        >
          {linkText}
        </Typography>
      </TouchableOpacity>
    </Container>
  );
};

export default SectionTitle;
