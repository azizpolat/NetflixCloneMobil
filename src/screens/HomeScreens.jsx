import {useNavigation} from '@react-navigation/native';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppScreens} from '../navigation/types';
const HomeScreens = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-neutral-800-flex-1">
      <SafeAreaView>
        <View>
          <Icon name="menuunfold" size={30} />
          <TouchableOpacity
            onPress={() => navigation.navigate(AppScreens.Search)}>
            <Icon name="search1" size={30} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreens;
