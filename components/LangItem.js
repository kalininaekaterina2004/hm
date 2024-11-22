import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LangItem = ({ lang, logo, experience }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>{lang}</Text>
      <Text style={styles.experience}>Опыт: {experience}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  logo: {
    width: 150,
    height: 150,
    marginRight: 5,
  },
  text: {
    fontSize: 21,
  },
  experience: {
    fontSize: 12,
    color: '#666',
  },
});

export default LangItem;