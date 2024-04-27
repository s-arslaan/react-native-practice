import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native';
import {css} from './components/css/Css';
import FlatCards from './components/Cards';
import Links from './components/Links';
import ContactList from './components/ContactList';
import PasswordGenerator from './components/PasswordGenerator';

function App(): React.JSX.Element {
  const styles = css();
  return (
    <SafeAreaView style={styles.background} >
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* <FlatCards />
        <Text style={[styles.headingText, styles.container]}>Links</Text>
        <Links title="Google" websiteLink="https://www.google.com" color="green" />
        <Links title="Facebook" websiteLink="https://www.facebook.com" color="blue" />
        <ContactList /> */}
        <PasswordGenerator />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
