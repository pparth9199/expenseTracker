import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Container, ListItem, CheckBox, Body, Right} from 'native-base';
import Animated from 'react-native-reanimated';
import {useSelector} from 'react-redux';

export const Card = ({navigation}) => {
  const {transactions} = useSelector((state) => state.transactions);
  const prices = transactions.map((transaction) => transaction.price);
  const totalPrice = prices.reduce((prev, cur) => (prev += cur), 0);
  const expense =
    prices
      .filter((price) => price < 0)
      .reduce((prev, cur) => (prev += cur), 0) * -1;

  return (
    <View style={{...styles.Box}}>
      <View
        style={{
          width: '65%',
          alignItems: 'flex-start',
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            fontFamily: 'Lato-Regular',
            fontWeight: '600',
          }}>
          Current Balance
        </Text>
        <Text
          style={{
            fontFamily: 'Lato-Medium',
            fontSize: 32,
            color: '#fff',
            fontWeight: '700',
            paddingTop: 15,
          }}>
          ₹{totalPrice}
        </Text>
        <Text
          style={{
            fontFamily: 'Lato-Regular',
            color: '#FFF',
            fontSize: 16,
            alignSelf: 'flex-start',
            marginTop: 10,
            fontWeight: '600',
          }}>
          Expense so far
        </Text>
        <Text
          style={{
            fontFamily: 'Lato-Refular',
            color: '#FFF',
            fontSize: 16,
            alignSelf: 'flex-start',
            marginTop: 10,
            fontWeight: '500',
          }}>
          ₹{expense}
        </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button
            rounded
            light
            style={{
              width: '40%',
              paddig: 10,
              marginTop: 50,
              backgroundColor: '#778beb',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('Add');
            }}>
            <Text
              style={{
                fontSize: 17,
                padding: 20,
                color: '#fff',
                fontFamily: 'Lato-Regular',
                fontWeight: '700',
              }}>
              Earned
            </Text>
          </Button>
          <Button
            rounded
            light
            style={{
              width: '40%',
              paddig: 10,
              backgroundColor: '#778beb',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 50,
              marginLeft: 57,
            }}
            onPress={() => {
              navigation.navigate('sub');
            }}>
            <Text
              style={{
                fontSize: 17,
                padding: 20,
                color: '#fff',
                fontFamily: 'Lato-Regular',
                fontWeight: '700',
              }}>
              Spent
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
    backgroundColor: '#3B3B98',
  },
});
export default Card;
