import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  Button,
  TouchableHighlight,
} from 'react-native';

const ExploreComponent = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [textRender, onChangeTextRender] = React.useState('');
  return (
    <SafeAreaView>
      <View style={{margin: 10}}>
        <TextInput
          style={{borderWidth: 1}}
          value={text}
          onChangeText={value => onChangeText(value)}
        />
        <Button title="Change" onPress={() => onChangeTextRender(text)} />
        <Text>{textRender}</Text>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor=""
          onPress={() => onChangeTextRender('')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            backgroundColor: 'cyan',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text>Clear</Text>
          </View>
        </TouchableHighlight>
      </View>
      <ScrollView>
        <View style={{...styles.boxItem, ...styles.boxItemYellow}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            ini kotak kuning
          </Text>
        </View>
        <View style={[styles.boxItem, styles.boxItemRed]}></View>
        <View style={styles.boxItemFunction({backgroundColor: 'green'})}></View>
        <View style={styles.boxItem}></View>
        <View style={styles.boxItem}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  boxItem: {
    height: 500,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxItemYellow: {
    backgroundColor: 'yellow',
  },
  boxItemRed: {
    backgroundColor: 'red',
  },
  boxItemFunction: ({backgroundColor}) => {
    return {
      height: 500,
      backgroundColor: backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    };
  },
});

export default ExploreComponent;
