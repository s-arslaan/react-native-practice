import {StyleSheet, useColorScheme} from 'react-native';

export const css = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      paddingHorizontal: 10,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    containerRow: {
      flex: 1,
      flexDirection: 'row',
    },
    background: {
        backgroundColor: isDarkMode ? 'black' : 'white',
        flex: 1,
    },
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 10,
      color: isDarkMode ? 'white' : 'black',
    },
    card: {
      width: 100,
      height: 100,
      borderRadius: 10,
      margin: 7,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
    cardRed: {
      backgroundColor: 'red',
    },
    cardGreen: {
      backgroundColor: 'green',
    },
    cardBlue: {
      backgroundColor: 'blue',
    },
    cardOrange: {
      backgroundColor: 'orange',
    },
    cardMagenta: {
      backgroundColor: 'magenta',
    },
    textWhite: {
      color: 'white',
    },
    textBlack: {
      color: 'black',
    },
  });
};
