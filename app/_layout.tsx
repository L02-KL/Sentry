import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

// Init Sentry
Sentry.init({
  dsn: "https://3fca1f7d84c2cec02fffd9efe78d33ee@o4510500120625152.ingest.de.sentry.io/4510500141006928",
  debug: __DEV__,
  tracesSampleRate: 1.0,
});

export const unstable_settings = {
  anchor: '(tabs)',
};

function RootLayoutComponent() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export default Sentry.wrap(RootLayoutComponent);
