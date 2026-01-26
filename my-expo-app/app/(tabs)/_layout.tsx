import { Pressable} from 'react-native';
import '../../global.css';
import { Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

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
        headerRight: () => (
          <Link href="/settings">
            <Pressable>
              <FontAwesome name="cog" size={25} color="black" style={{ marginRight: 15 }}/>
            </Pressable>
          </Link>
        ),
        headerLeft: () => (
          <Link href="/">
            <Pressable>
              <FontAwesome name="home" size={25} color="black" style={{ marginLeft: 15 }}/>
            </Pressable>
          </Link>
        ),
      }}
    />;
}
