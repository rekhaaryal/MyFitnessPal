import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const FoodListItem = ({ item }) => {
  return(
    <View
     style={{
      backgroundColor: 'gainsboro',
      padding: 10,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      }}
    >   
      <View style={{flex:1, gap:5}}>
       <Text style={{ fontWeight:'bold', fontSize:16}}>{item}</Text>
       <Text style={{color: 'dimgray'}}>{item.cal} cal, {item.brand}</Text>
      </View>
      <AntDesign name="pluscircleo" size={24} color="royalblue"></AntDesign>
    </View>
  );
};
export default FoodListItem;