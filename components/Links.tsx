import React from 'react';
import {Button, Linking, View} from 'react-native';
import {css} from './css/Css';

function Links(props: any) {
  const styles = css();

  const openWebPage = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };

  return (
    <View style={styles.container}>
      <Button
        title={props.title}
        onPress={() => openWebPage(props.websiteLink)}
      />
    </View>
  );
}

export default Links;
