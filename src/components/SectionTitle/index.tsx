import { useTheme } from 'styled-components/native';
import Typography from '../Typography';
import { Container } from './SectionTitle.styles';
import type { Props } from './SectionTitle.types';
import { TouchableOpacity } from 'react-native';

const SectionTitle = ({ linkOnPress, linkText, title, ...props }: Props) => {
  const { colors } = useTheme();
  return (
    <Container {...props}>
      <Typography
        sizeVariant={'semiBold'}
        variant={'base'}
        color={colors.black}
      >
        {title}
      </Typography>
      <TouchableOpacity onPress={linkOnPress}>
        <Typography
          sizeVariant={'medium'}
          variant={'sm'}
          color={colors.gray[600]}
        >
          {linkText}
        </Typography>
      </TouchableOpacity>
    </Container>
  );
};

export default SectionTitle;