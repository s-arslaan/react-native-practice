import React from 'react';
import {Button, Linking, View} from 'react-native';
import {css} from './css/Css';

function Links(props: any) {
  const styles = css();
  const color = props.color || 'red';

  const openWebPage = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };

  return (
    <View style={[styles.container, styles.m10]}>
      <Button
        title={props.title}
        onPress={() => openWebPage(props.websiteLink)}
        color={color}
      />
    </View>
  );
}

export default Links;
