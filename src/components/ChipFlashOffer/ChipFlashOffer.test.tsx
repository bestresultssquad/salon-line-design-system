import Chip from './index';
import { renderWithTheme } from '../../configs/testUtils';

describe('Chip Component', () => {
  it('renders the Chip component with the correct label', () => {
    const { getByText } = renderWithTheme(<Chip label="Test Label" />);
    const labelElement = getByText('Test Label');
    expect(labelElement).toBeTruthy();
  });
});
