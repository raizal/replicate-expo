import 'react-native-gesture-handler/jestSetup';

jest.mock('global', () => ({
  ...global,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  WebSocket: function WebSocket() {},
}));

jest.mock('react-native/Libraries/Utilities/BackHandler', () => {
  return jest.requireActual('react-native/Libraries/Utilities/__mocks__/BackHandler.js');
});

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
