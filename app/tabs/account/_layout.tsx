import useAuthGuard from '@/app/hooks/useAuthGuard';
import { Stack } from 'expo-router';

export default function RootLayout() {
  useAuthGuard();
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false
      }}/>
      <Stack.Screen name="details" options={{
        headerShown: false
      }}/>
    </Stack>
  );
}
