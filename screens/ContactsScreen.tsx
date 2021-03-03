import * as React from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import ContactListItem from '../components/ContactListItem';

import users from '../data/Users';


export default function ContactsCreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={users} 
        renderItem={({item}) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
