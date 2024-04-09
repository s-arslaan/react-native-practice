import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={isDarkMode ? styles.darkBackground : styles.lightBackground}>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.textWhite : styles.textBlack}>
          Hello World !!!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWhite: {
    color: 'white',
  },
  textBlack: {
    color: 'black',
  },
  darkBackground: {
    backgroundColor: 'black',
    flex: 1,
  },
  lightBackground: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
