import React from 'react';
import {Button, Image, Linking, ScrollView, Text, View} from 'react-native';
import {css} from './css/Css';

export default function ContactList() {
  const styles = css();

  const contactList = [
    {
      uid: 1,
      name: 'Ars',
      status: 'working',
      imageUrl:
        'https://avatars.githubusercontent.com/u/64966118?s=400&u=ff272d3232b06b1566df24daef41546c0fbc4c42&v=4',
    },
    {
      uid: 2,
      name: 'Tars',
      status: 'dancing',
      imageUrl:
        'https://avatars.githubusercontent.com/u/64966118?s=400&u=ff272d3232b06b1566df24daef41546c0fbc4c42&v=4',
    },
    {
      uid: 3,
      name: 'Shaikh',
      status: 'singing',
      imageUrl:
        'https://avatars.githubusercontent.com/u/64966118?s=400&u=ff272d3232b06b1566df24daef41546c0fbc4c42&v=4',
    },
    {
      uid: 4,
      name: 'Elle',
      status: 'flying',
      imageUrl:
        'https://avatars.githubusercontent.com/u/64966118?s=400&u=ff272d3232b06b1566df24daef41546c0fbc4c42&v=4',
    },
    {
      uid: 5,
      name: 'Elle1',
      status: 'flying',
      imageUrl:
        'https://avatars.githubusercontent.com/u/64966118?s=400&u=ff272d3232b06b1566df24daef41546c0fbc4c42&v=4',
    },
    {
      uid: 6,
      name: 'Elle2',
      status: 'flying',
      imageUrl:
        'https://avatars.githubusercontent.com/u/64966118?s=400&u=ff272d3232b06b1566df24daef41546c0fbc4c42&v=4',
    },
    {
      uid: 7,
      name: 'Elle3',
      status: 'flying',
      imageUrl:
        'https://avatars.githubusercontent.com/u/64966118?s=400&u=ff272d3232b06b1566df24daef41546c0fbc4c42&v=4',
    },
  ];

  const callNumber = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Contacts</Text>
      <ScrollView style={styles.container}>
        {contactList.map(contact => (
          <View key={contact.uid} style={styles.contactCard}>
            <Image
              source={{uri: contact.imageUrl}}
              style={styles.contactImg}
            />
            <View style={styles.container}>
                <Text style={[styles.contactName]}>{contact.name}</Text>
                <Text>{contact.status}</Text>
            </View>
            <Button title="Call" onPress={() => {callNumber('+911234567890')}} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
