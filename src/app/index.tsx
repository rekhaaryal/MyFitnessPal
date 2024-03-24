
import {View,Text,StyleSheet,} from 'react-native';
import FoodListItem from   '../components/FoodListItem';

export default function App(){
  return(
    <View style={styles.container}>
      <FoodListItem item = {{ label: 'Pizza' , cal: 75, brand: 'Dominos'}}/>
      <FoodListItem item = {{ label: 'Rice', cal:100, brand: 'parl'}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    gap: 10,
  },
});