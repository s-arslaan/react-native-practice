import {StyleSheet, useColorScheme} from 'react-native';

export const css = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    m10: {
      margin: 10,
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
    contactCard: {
      backgroundColor: '#333',
      marginVertical: 10,
      padding: 20,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    contactImg: {
      width: 50,
      height: 50,
      borderRadius: 50 / 2,
    },
    contactName: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    contactStatus: {
      // color: 'white',
    },
  });
};
