import '../../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack 
    screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffffff',
        },
        headerTintColor: '#000000ff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />;
}
