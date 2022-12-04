import { Amplify } from 'aws-amplify';
import awsmobile from './src/aws-exports';
import { StatusBar } from 'expo-status-bar';
import { withAuthenticator } from 'aws-amplify-react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './src/navigation';

Amplify.configure({ ...awsmobile, Analytics: { disabled: true } });

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style='light' />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
