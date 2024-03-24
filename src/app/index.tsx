
import {View,Text,StyleSheet, FlatList} from 'react-native';
import FoodListItem from   '../components/FoodListItem';
 const foodItems = [
  { label: 'Pizza' , cal: 75, brand: 'Dominos'},
  { label: 'Rice', cal:150, brand: 'parl'},
  { label: 'Coffee', cal:100, brand: 'Cappuccino'},
 ];

export default function App(){
  return(
    <View style={styles.container}>
      <FlatList
        data={foodItems}
        renderItem={({item})=> <FoodListItem item={item}/>}
        contentContainerStyle={{gap: 5 }}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    gap: 10,
  },
});