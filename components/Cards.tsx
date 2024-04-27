import {Button, Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {css} from './css/Css';

export default function FlatCards() {
  const styles = css();

  return (
    <View style={[styles.container]}>
      <Text style={[styles.headingText]}>Cards</Text>
      <ScrollView horizontal={true} style={[styles.containerRow, styles.m10]}>
        <View style={[styles.card, styles.cardRed]}>
          <Text style={styles.textWhite}>Card 1</Text>
        </View>
        <View style={[styles.card, styles.cardGreen]}>
          <Text style={styles.textWhite}>Card 2</Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <Text style={styles.textWhite}>Card 3</Text>
        </View>
        <View style={[styles.card, styles.cardOrange]}>
          <Text style={styles.textWhite}>Card 4</Text>
        </View>
        <View style={[styles.card, styles.cardMagenta]}>
          <Text style={styles.textWhite}>Card 5</Text>
        </View>
      </ScrollView>
    </View>
  );
}
