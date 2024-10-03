export { default as StorybookUi } from '../.storybook';

import { useFonts } from 'expo-font';

import StorybookUIRoot from '../.storybook';

function App() {
  const [loaded, error] = useFonts({
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded && !error) {
    return null;
  }

  return <StorybookUIRoot />;
}

export default App;
