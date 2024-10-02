import '@testing-library/jest-native/extend-expect';

jest.mock('moti/skeleton', () => {
  return {
    View: 'View',
  };
});
