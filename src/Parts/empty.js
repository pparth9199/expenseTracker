import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Container, ListItem, CheckBox, Body, Right} from 'native-base';
import Animated from 'react-native-reanimated';
import {useSelector} from 'react-redux';

export const Empty = () => {
  return (
    <View style={{alignItems: 'center', marginTop: 30}}>
      <Text style={{color: '#ff4500', fontWeight: '700', fontSize: 20}}>
        No transactions yet
      </Text>
    </View>
  );
};
export default Empty;
