import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppScreens} from './types';
import HomeScreens from '../screens/HomeScreens';
import MovieScreen from '../screens/MovieScreen';
import SearchScreen from '../screens/SearchScreens';
import PersonScreens from '../screens/PersonScreen';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppScreens.Movie} component={MovieScreen} />
      <Stack.Screen name={AppScreens.Search} component={SearchScreen} />
      <Stack.Screen name={AppScreens.Person} component={PersonScreens} />
      <Stack.Screen name={AppScreens.Home} component={HomeScreens} />
    </Stack.Navigator>
  );
};
