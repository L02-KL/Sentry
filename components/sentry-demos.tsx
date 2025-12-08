import * as Sentry from '@sentry/react-native';
import React from 'react';
import { Button, Text, View } from 'react-native';

export async function simulateSlowNetworkRequest() {
  // Simulate a slow network request (5 seconds)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Slow request completed');
    }, 5000);
  });
}

// Crash thật - sẽ crash app và Sentry bắt được
export function triggerNativeCrash() {
  Sentry.nativeCrash();
}

// Throw error - Sentry bắt và log
export function triggerJSCrash() {
  const error = new Error('JS Crash từ button!');
  Sentry.captureException(error);
  throw error;
}

function CrashyComponent() {
  const [shouldCrash, setShouldCrash] = React.useState(false);
  
  if (shouldCrash) {
    // This will cause an unhandled error
    const data = undefined as any;
    return <Text>{data.map(() => null)}</Text>;
  }

  return <Button title="Crash UI" onPress={() => setShouldCrash(true)} />;
}

export function CrashyBoundary() {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return (
      <View>
        <Text>Error caught!</Text>
      </View>
    );
  }

  return (
    <View>
      <CrashyComponent />
    </View>
  );
}
