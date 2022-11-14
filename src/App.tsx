import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { QueryClientProvider } from 'react-query';

import MainNavigator from '@src/navigations';
import { client } from '@services/http';
import ApplicationContext, { useAppState } from '@stores/ApplicationContext';

SplashScreen.preventAutoHideAsync();
const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const appState = useAppState();

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Inter_100Thin,
          Inter_200ExtraLight,
          Inter_300Light,
          Inter_400Regular,
          Inter_500Medium,
          Inter_600SemiBold,
          Inter_700Bold,
          Inter_800ExtraBold,
          Inter_900Black,
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 1000);
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <ApplicationContext.Provider value={appState}>
      <QueryClientProvider client={client}>
        <MainNavigator />
      </QueryClientProvider>
    </ApplicationContext.Provider>
  );
};

export default App;
