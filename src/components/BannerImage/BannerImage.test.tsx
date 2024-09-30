import { act, fireEvent } from '@testing-library/react-native';
import BannerImage from './index';
import { renderWithTheme } from '../../configs/testUtils';
import type { BannerObject } from './BannerImage.types';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const bannerObject: BannerObject[] = [
  {
    imageUrl: 'https://example.com/image1.jpg',
    altText: 'Image 1',
    action: jest.fn(),
  },
  {
    imageUrl: 'https://example.com/image2.jpg',
    altText: 'Image 2',
    action: jest.fn(),
  },
];

describe('BannerImage Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = renderWithTheme(
      <BannerImage bannerObject={bannerObject} />
    );
    expect(getByTestId('image-0')).toBeTruthy();
    expect(getByTestId('image-1')).toBeTruthy();
  });

  it('auto rotates images', () => {
    jest.useFakeTimers();
    const { getByTestId } = renderWithTheme(
      <BannerImage bannerObject={bannerObject} />
    );

    act(() => {
      jest.advanceTimersByTime(4000);
    });

    expect(getByTestId('image-1')).toBeTruthy();
  });

  it('displays paginator when there are multiple images', () => {
    const { getByTestId } = renderWithTheme(
      <BannerImage bannerObject={bannerObject} />
    );
    expect(getByTestId('paginator')).toBeTruthy();
  });

  it('does not display paginator when there is only one image', () => {
    const singleBannerObject: BannerObject[] = [bannerObject[0]!];
    const { queryByTestId } = renderWithTheme(
      <BannerImage bannerObject={singleBannerObject} />
    );
    expect(queryByTestId('paginator')).toBeNull();
  });

  it('handles image click actions', () => {
    const { getByTestId } = renderWithTheme(
      <BannerImage bannerObject={bannerObject} />
    );
    const image1 = getByTestId('image-0');

    act(() => {
      fireEvent.press(image1);
    });

    expect(bannerObject[0]?.action).toHaveBeenCalled();
  });
});
