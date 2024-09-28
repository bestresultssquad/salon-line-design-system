import { useFonts } from 'expo-font';
import { default as StorybookUi } from '../.storybook';

function App() {
  const [loaded, error] = useFonts({
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  });
  if (!loaded && !error) {
    return null;
  }

  return <StorybookUi />;
}

export default App;
