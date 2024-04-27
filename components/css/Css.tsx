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
    itemsCenter: {
      justifyContent: 'center',
      alignItems: 'center',
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
    cardDisable: {
      backgroundColor: '#333',
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
    heading: {
      fontSize: 15,
    },
    inputWrapper: {
      marginBottom: 15,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    inputColumn: {
      flexDirection: 'column',
    },
    inputStyle: {
      padding: 8,
      width: '30%',
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#16213e',
    },
    errorText: {
      fontSize: 12,
      color: '#ff0d10',
    },
    formActions: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    primaryBtn: {
      width: 120,
      height: 65,
      padding: 10,
      borderRadius: 8,
      marginHorizontal: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnTxt: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700',
    },
    secondaryBtn: {
      width: 120,
      height: 65,
      padding: 10,
      borderRadius: 8,
      marginHorizontal: 8,
      backgroundColor: '#555',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardPassword: {
      padding: 12,
      borderRadius: 6,
      marginHorizontal: 12,
      marginTop: 30,
    },
    cardElevatedPassword: {
      backgroundColor: '#333',
      elevation: 1,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowColor: '#333',
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    generatedPassword: {
      fontSize: 22,
      textAlign: 'center',
      marginBottom: 12,
      color:'#000'
    },
    subTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 2,
    },
  });
};
