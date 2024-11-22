import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import LangItem from './components/LangItem';

const langs = [
  { id: '1', lang: 'JavaScript', logo: require('./assets/js.png'), experience: '2 года' },
  { id: '2', lang: 'Java', logo: require('./assets/java.png'), experience: '1 год' },
  { id: '3', lang: 'Python', logo: require('./assets/python.png'), experience: '1 год' },
  { id: '4', lang: 'HTML', logo: require('./assets/html.png'), experience: '2 года' },
  { id: '5', lang: 'CSS', logo: require('./assets/css.png'), experience: '2 года' },
];

export default function App() { 
  return ( 
    <View style={styles.container}> 
      <FlatList 
        data={langs} 
        keyExtractor={item => item.id} 
        renderItem={({ item }) => <LangItem logo={item.logo} lang={item.lang} experience={item.experience} />}
      /> 
    </View> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    padding: 15, 
  }, 
});