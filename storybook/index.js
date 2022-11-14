// if you use expo remove this line
import { withKnobs } from '@storybook/addon-knobs';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { AppRegistry, Platform } from 'react-native';

import './rn-addons';

addDecorator(withKnobs);

// import stories
configure(() => {
  require('./stories');
  require('../src/components/CryptoItemCard/CryptoItemCard.stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  port: 7007,
  host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
  asyncStorage: require('@react-native-async-storage/async-storage').default,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
