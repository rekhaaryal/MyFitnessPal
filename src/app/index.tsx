
import {View,Text,StyleSheet, FlatList , TextInput, Button} from 'react-native';
import FoodListItem from   '../components/FoodListItem';
import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const query = gql`
query search($ingr: String) {
  search(ingr: $ingr) {
    text
    hints {
      food {
        label
        brand
        foodId
        nutrients {
          ENERC_KCAL
        }
      }
    }
  }
}
`;

 const foodItems = [
  { label: 'Pizza' , cal: 75, brand: 'Dominos'},
  { label: 'Rice', cal:150, brand: 'parl'},
  { label: 'Coffee', cal:100, brand: 'Cappuccino'},
 ];

export default function SearchScreen(){

  const [search, setSearch] = useState('');




  const performSearch = () => {
    console.warn('Searching for:' , search);
    setSearch('');
  };
  
  return(
    <View style={styles.container}>
      <TextInput 
        value={search} 
        onChangeText={setSearch}
        placeholder='Search...' 
        style={styles.input}
      />
      {search && <Button title="Search" onPress={ performSearch }/>}

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
  input: {
    backgroundColor: '#f2f2f2',
    padding:10,
    borderRadius:20,
  },

});