import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Button} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 600,
      }}>
      <Button
        title="To Explore"
        onPress={() => navigation.navigate('Explore')}
      />
      <View
        style={{
          marginTop: 60,
        }}>
        <Button title="To About" onPress={() => navigation.navigate('About')} />
      </View>
    </View>
  );
};

export default Home;
