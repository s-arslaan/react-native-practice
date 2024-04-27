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

function App(): React.JSX.Element {
  const styles = css();
  return (
    <SafeAreaView style={styles.background}>
      <FlatCards />
      <Links title="Google" websiteLink="https://www.google.com" />
    </SafeAreaView>
  );
}

export default App;
